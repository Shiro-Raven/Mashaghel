/* eslint-disable */
var cred = require('../config/config');
var nodemailer = require('nodemailer');
var redisClient = require('../config/redis');

const transporter = nodemailer.createTransport({
  auth: {
    pass: cred.EMAIL_PASS,
    user: cred.EMAIL
  },
  host: 'smtp.ethereal.email',
  port: 587
});

function sendReminder(email, type, todoName) {

  var article = type === 'Event' ? 'an' : 'a';

  var message = {
    from: 'Mashaghel Team',
    html: '<h2>This is to remind you that you have ' + article + ' ' + type.toLowerCase() + ' "' + todoName + '" today!</h2>' +
      '<br/> <h1>- Mashaghel Team</h1>',
    subject: 'To-do Reminder',
    to: email
  };

  transporter.sendMail(message, (err) => {
    if (err) {
      console.log(err);
    }

    // If sent successfully, remove from redis
    redisClient.LREM(todoName + ':' + type, 0, email, (err, remElements) => {
      if (err) {
        return console.log(err);
      }

      if (remElements !== 1) {
        return console.log('Error removing email from Redis list');
      }
    });
  });
}

module.exports.triggerEmails = function () {
  redisClient.keys('*', function (err, keys) {
    if (err) {
      return console.log(err);
    }

    for (var i = 0, len = keys.length; i < len; i++) {
      getEmailsInTODO(keys[i]);
    }
  });
};

function getEmailsInTODO(todoData) {
  redisClient.LRANGE(todoData, 0, -1, function (error, attendees) {
    if (error) {
      return console.log(error);
    }

    for (var j = 0, length = attendees.length; j < length; j++) {
      console.log('Sending an email to ' + attendees[j] + ' concerning his ' + todoData.split(':')[1] + ' ' + todoData.split(':')[0]);
      sendReminder(attendees[j], todoData.split(':')[1], todoData.split(':')[0]);
    }
  });
}
