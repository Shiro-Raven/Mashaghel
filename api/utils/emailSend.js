var cred = require('../config/config');
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  auth: {
    pass: 'tveXxzzR5DT3ena4sA',
    user: 'fuwtrry4pcg7beqh@ethereal.email'
  },
  host: 'smtp.ethereal.email',
  port: 587
});

module.exports.sendReminders = function () {

  var todoName = '';
  var email = '';

  var message = {
    from: 'Mashaghel Team',
    html: '<h2>This is to remind you that you have a To-do: ' + todoName + ' today!</h2>',
    subject: 'To-do Reminder',
    to: email
  };

  transporter.sendMail(message, function (err) {
    if (err) {
      console.log(err);
    }
  });
};
