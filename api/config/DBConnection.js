var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true
}).
then(function () {
  console.log('Connected to database: ' +
    config.MONGO_URI);
}).
catch(function (err) {
  if (err) {
    console.error(err);
  }

});

//TODO: add models
require('../models/User');
