/*eslint max-statements: ["error", 11]*/

var mongoose = require('mongoose');
var User = mongoose.model('User');
var ToDo = mongoose.model('ToDo');

module.exports.createToDo = function (req, res, next) {
    var newToDo = new ToDo({
        deadline: req.body.deadline,
        description: req.body.description,
        emails: req.body.emails,
        lat: req.body.lat,
        lng: req.body.lng,
        name: req.body.name,
        type: req.body.type
    });

    if (!newToDo.name) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: 'Name Is Required!'
        });
    }

    if (!newToDo.deadline) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: 'Deadline Is Required!'
        });
    }

    if (!newToDo.type) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: 'Type Is Required!'
        });
    }

    if ('Event'.localeCompare(newToDo.type) !== 0 && 'Task'.localeCompare(newToDo.type) !== 0) {
        return res.status(422).json({
            data: null,
            error: null,
            msg: 'Type Must Either Be "Event" OR "Task"!'
        });
    }

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
