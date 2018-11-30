var express = require('express');
var router = express.Router();

var ToDoController = require('../controllers/ToDoController');

var isSignedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).json({
    data: null,
    error: null,
    msg: 'User Is Not Signed In!'
  });
};

module.exports = function (passport) {
  // --- Auth --- //
  router.post('/signup', function (req, res, next) {
    passport.authenticate('local-signup', function (err, user, info) {
      if (err) {
        throw err;
      } else if (!user) {
        return res.status(409).json({
          data: null,
          error: null,
          message: info.message
        });
      }

      req.logIn(user, function (err2) {
        if (err2) {
          throw err2;
        }

        return res.status(201).json({
          data: user,
          error: null,
          message: info.message
        });
      });

    })(req, res, next);
  });

  router.post('/signin', function (req, res, next) {
    passport.authenticate('local-signin', function (err, user, info) {
      if (err) {
        throw err;
      } else if (!user) {
        return res.status(422).json({
          data: null,
          error: null,
          message: info.message
        });
      }

      req.logIn(user, function (err2) {
        if (err2) {
          throw err2;
        }

        return res.status(200).json({
          data: user,
          error: null,
          message: info.message
        });
      });

    })(req, res, next);
  });

  router.post('/createtodo', isSignedIn, ToDoController.createToDo);


  module.exports = router;

  return router;
};
