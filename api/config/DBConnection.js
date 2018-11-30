var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true
}).
then(function () {
  console.log('successfully connected to database on the url: ' +
    config.MONGO_URI);
}).
catch(function (err) {
  if (err) {
    console.error(err);
  }

});

//TODO: add models
require('../models/User');
