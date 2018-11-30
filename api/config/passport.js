var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');


module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (_id, done) {
        User.findById(_id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        passReqToCallback: true,
        passwordField: 'password',
        usernameField: 'email'
    },
        function (req, email, password, done) {
            process.nextTick(function () {
                User.findOne({ 'email': email }, function (err, user) {
                    if (err) {
                        return done(err);
                    } else if (user) {
                        return done(null, false, { 'message': 'Email Is In Use!' });
                    }
                    var newUser = new User();

                    newUser.email = email;
                    newUser.password = password;

                    newUser.save(function (err2) {
                        if (err2) {
                            throw err2;
                        }

                        return done(null, newUser, { 'message': 'Sign Up Is Successful!' });
                    });
                });
            });
        }
    ));

    passport.use('local-signin', new LocalStrategy({
        passReqToCallback: true,
        passwordField: 'password',
        usernameField: 'email'
    },
        function (req, email, password, done) {
            User.findOne({ 'email': email }, function (err, user) {
                if (err) {
                    return done(err);
                } else if (!user) {
                    return done(null, false, { 'message': 'Email Is Wrong!' });
                } else if (user.password !== password) {
                    return done(null, false, { 'message': 'Password Is Wrong!' });
                }

                return done(null, user, { 'message': 'Sign In Is Successful!' });
            });
        }
    ));
};
