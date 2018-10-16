const db = require("../models");
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'name',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, name, password, done) => {
  const userData = {
    email: req.body.email.trim(),
    password: password.trim(),
    name: req.body.name.trim(),
    numberOfClears: 0
  };

  // db.User
  //   .create(userData)
  //   .then(dbModel => done(null))
  //   .catch(err => done(err));

  const newUser = new db.User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});


