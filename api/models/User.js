/* eslint-disable */
var config = require('../config/config');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        index: true,
        unique: true,
        trim: true,
        match: config.EMAIL_REGEX
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('User', userSchema, 'users');