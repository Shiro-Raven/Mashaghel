var config = require('../config/config');
var mongoose = require('mongoose');

var ToDo = require('../models/ToDo');
var toDoSchema = ToDo.schema;

var userSchema = mongoose.Schema({
    email: {
        index: true,
        lowercase: true,
        match: config.EMAIL_REGEX,
        required: true,
        trim: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        trim: true,
        type: String
    },
    todos: [toDoSchema]
});

module.exports = mongoose.model('User', userSchema, 'users');
