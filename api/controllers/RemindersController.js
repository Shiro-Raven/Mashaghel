var mongoose = require('mongoose');
var ToDo = mongoose.model('ToDo');
var redisClient = require('../config/redis');
var emailSender = require('../utils/emailSend');

setInterval(function () {
  // console.log('Hi');
}, 1000);
