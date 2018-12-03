/*eslint max-statements: ["error", 50]*/

var mongoose = require('mongoose');
var User = mongoose.model('User');
var redisClient = require('../config/redis');
var emailSender = require('../utils/emailSend');
var timeDrift = require('../config/config').TIME_DRIFT;

setInterval(function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(today.getDate() + 1);

  // First check if there are pending emails
  redisClient.keys('*', function (err, keys) {
    if (err) {
      return console.log(err);
    }

    if (keys.length > 0) {
      emailSender.triggerEmails();
    } else {
      User.find({}, (errUsers, allUsers) => {
        if (errUsers) {
          return console.log(errUsers);
        }

        var arrayOfEmails = [];

        for (var i = 0; i < allUsers.length; i++) {
          for (var j = 0; j < allUsers[i].todos.length; j++) {
            var todoDate = new Date(allUsers[i].todos[j].deadline.getTime() + (timeDrift * 1000));
            todoDate.setHours(0, 0, 0, 0);

            if (todoDate - today < 0) {
              //arrayOfEmails.push(allUsers[i].email);
              redisClient.LPUSH(allUsers[i].todos[j].name + ':' + allUsers[i].todos[j].type, allUsers[i].email);
              for (var k = 0; k < allUsers[i].todos[j].emails.length; k++) {
                //arrayOfEmails.push(allUsers[i].todos[j].emails[k]);
                redisClient.LPUSH(allUsers[i].todos[j].name + ':' + allUsers[i].todos[j].type, allUsers[i].todos[j].emails[k]);
              }
            }
          }
        }

        console.log('Emails being sent...');
        //console.log(arrayOfEmails);
        emailSender.triggerEmails();
      });
    }
  });
}, 30 * 1000);
