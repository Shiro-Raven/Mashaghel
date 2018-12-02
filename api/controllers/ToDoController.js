/*eslint max-statements: ["error", 50]*/

var config = require('../config/config');
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
  console.log(req.body.deadline);
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
  User.findByIdAndUpdate(req.user._id, req.user, function (err, _) {
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

module.exports.readToDo = function (req, res, next) {
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

  return res.status(200).json({
    data: todo,
    error: null,
    msg: 'To Do Is Read Successfully!'
  });
};

module.exports.getToDos = function (req, res, next) {
  console.log('hey');
  if (!req.body.date) {
    return res.status(422).json({
      data: null,
      error: null,
      msg: 'date Is Required!'
    });
  }
  var arr = [];
  var date = new Date(req.body.date);

  for (var i = 0; i < req.user.todos.length; i++) {
    console.log(req.user.todos[i].deadline.getTime());
    console.log(date.getTime());
    var d = new Date(req.user.todos[i].deadline);
    d.setHours(0, 0, 0, 0);
    console.log(d);
    if (d.getTime() === date.getTime()) {
      console.log(i);
      arr.push(req.user.todos[i]);
    }
  }
  console.log(arr);

  return res.status(200).json({
    data: arr,
    error: null,
    msg: 'ToDos are Read Successfully!'
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

  var todo = req.user.todos.id(req.body._id);
  if (!todo) {
    return res.status(404).json({
      data: null,
      error: null,
      msg: 'To Do Is Not Found!'
    });
  }

  req.user.todos.remove(todo);
  User.findByIdAndUpdate(req.user._id, req.user, function (err, _) {
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
