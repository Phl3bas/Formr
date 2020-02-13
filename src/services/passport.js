const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/environment');

// User model
const User = mongoose.model('users');

// serialize user id for cookies
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize user id from cookies
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// google oauth stratagy
// requires clientID, clientsecret and the callback address
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClient,
      clientSecret: keys.GoogleSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // user is already registered
          done(null, existingUser);
        } else {
          // user is new create new user in database
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
