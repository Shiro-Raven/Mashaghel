var mongoose = require('mongoose');

var toDoSchema = mongoose.Schema({
    deadline: {
        index: true,
        required: true,
        type: Date
    },
    description: {
        default: '',
        maxlength: 1000,
        type: String
    },
    emails: {
        default: [],
        type: [String]
    },
    lat: {
        default: 0,
        type: mongoose.Schema.Types.Decimal128
    },
    lng: {
        default: 0,
        type: mongoose.Schema.Types.Decimal128
    },
    name: {
        index: true,
        maxlength: 100,
        required: true,
        type: String
    },
    type: {
        enum: [
            'Event',
            'Task'
        ],
        required: true,
        type: String
    }
});

module.exports = mongoose.model('ToDo', toDoSchema, 'todos');
