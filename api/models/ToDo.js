var mongoose = require('mongoose');

var toDoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        maxlength: 100
    },
    description: {
        type: String,
        maxlength: 1000,
        default: ''
    },
    deadline: {
        type: Date,
        required: true,
        index: true
    },
    type: {
        type: String,
        required: true,
        enum: ['event', 'task']
    },
    emails: {
        type: [String],
        default: []
    },
    lat: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    lat: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    }
});

module.exports = mongoose.model('ToDo', toDoSchema, 'todos');