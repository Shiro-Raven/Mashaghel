/*eslint max-statements: ["error", 50]*/

var config = require('../config/config');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var ToDo = mongoose.model('ToDo');
var timeDrift = require('../config/config').TIME_DRIFT;

module.exports.createToDo = function (req, res) {
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

  if (req.body.emails) {
    var index = 0;
    for (index = 0; index < req.body.emails.length; index++) {
      if (!req.body.emails[index].match(config.EMAIL_REGEX)) {
        return res.status(422).json({
          data: null,
          error: null,
          msg: 'Email "' + req.body.emails[index] + '" Is Not Correct!'
        });
      }
    }
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
  User.findByIdAndUpdate(req.user._id, req.user, function (err) {
    if (err) {
      throw err;
    }

    return res.status(200).json({
      data: newToDo,
      error: null,
      msg: 'To Do Is Created Successfully!'
    });
  });
};

module.exports.getToDos = function (req, res) {
  if (!req.body.date) {
    return res.status(422).json({
      data: null,
      error: null,
      msg: 'date Is Required!'
    });
  }

  var date = new Date(req.body.date + (timeDrift * 1000));
  date.setHours(0, 0, 0, 0);

  User.find({
    'email': req.body.email
  }, {
    'todos': 1
  }, (err, todosList) => {
    if (err) {
      return console.log(err);
    }

    //console.log(todosList[0].todos);

    var result = [];

    for (var i = 0; i < todosList[0].todos.length; i++) {
      var taskDate = new Date(todosList[0].todos[i].deadline.getTime() + (timeDrift * 1000));
      taskDate.setHours(0, 0, 0, 0);

      if (taskDate.getTime() === date.getTime()) {
        result.push(todosList[0].todos[i]);
      }
    }

    return res.status(200).json({
      data: result,
      error: null,
      msg: 'ToDos are Read Successfully!'
    });
  });
};

module.exports.deleteToDo = function (req, res) {
  if (!req.body._id) {
    return res.status(422).json({
      data: null,
      error: null,
      msg: '_id Is Required!'
    });
  }

  var todo = req.user.todos.id(req.body._id);
  if (!todo) {
    return res.status(404).json({
      data: null,
      error: null,
      msg: 'To Do Is Not Found!'
    });
  }

  req.user.todos.remove(todo);
  User.findByIdAndUpdate(req.user._id, req.user, function (err) {
    if (err) {
      throw err;
    }

    return res.status(200).json({
      data: null,
      error: null,
      msg: 'To Do Is Deleted Successfully!'
    });
  });
};
