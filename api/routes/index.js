var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();
var redisClient = require('../config/redis');

module.exports = function (passport) {
  // --- Auth --- //
  router.post('/signup', function (req, res, next) {
    passport.authenticate('local-signup', function (err, user, info) {
      if (err) {
        throw err;
      } else if (!user) {
        return res.status(409).json({
          error: null,
          data: null,
          message: info.message
        });
      } else {
        return res.status(201).json({
          error: null,
          data: user,
          message: info.message
        });
      }
    })(req, res, next);
  });

  router.post('/signin', function (req, res, next) {
    passport.authenticate('local-signin', function (err, user, info) {
      if (err) {
        throw err;
      } else if (!user) {
        return res.status(422).json({
          error: null,
          data: null,
          message: info.message
        });
      } else {
        return res.status(200).json({
          error: null,
          data: user,
          message: info.message
        });
      }
    })(req, res, next);
  });

  module.exports = router;
  return router;
}
