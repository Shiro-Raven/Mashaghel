/*eslint max-statements: ["error", 11]*/

var mongoose = require('mongoose');
var User = mongoose.model('User');
var ToDo = mongoose.model('ToDo');

module.exports.createToDo = function (req, res, next) {
    if (!req.body.name) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: 'Name Is Required!'
        });
    }

    if (!req.body.deadline) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: 'Deadline Is Required!'
        });
    }

    if (!req.body.type) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: 'Type Is Required!'
        });
    }

    if ('Event'.localeCompare(req.body.type) !== 0 && 'Task'.localeCompare(req.body.type) !== 0) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: 'Type Must Either Be "Event" OR "Task"!'
        });
    }

    var newToDo = new ToDo({
        deadline: req.body.deadline,
        description: req.body.description,
        emails: req.body.emails,
        lat: req.body.lat,
        lng: req.body.lng,
        name: req.body.name,
        type: req.body.type
    });

    req.user.todos.push(newToDo);
    User.findByIdAndUpdate(req.user._id, req.user, function (err, _) {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            data: newToDo,
            error: null,
            msg: 'To Do Created Successfully!'
        });
    });
};

module.exports.deleteToDo = function (req, res, next) {
    if (!req.body._id) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: '_id Is Required!'
        });
    }

    req.user.todos.remove({ _id: req.body._id });
    User.findByIdAndUpdate(req.user._id, req.user, function (err, _) {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            data: null,
            error: null,
            msg: 'To Do Deleted Successfully!'
        });
    });
};
