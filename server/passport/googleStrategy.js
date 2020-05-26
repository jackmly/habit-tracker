const User = require('../models/user.model')
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findOrCreate");

const strategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/auth/google/home",
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    User.findOne({ providerId: profile.id }, function (err, user) {
        if (err) {
            return done(err);
        }
        //No user was found... so create a new user
        if (!user) {
            user = new User({
                providerId: profile.id,
                name: profile.displayName,
                username: profile.emails[0].value,
                provider: "Google"
            });
        user.save(function(err) {
            if (err) {
                console.log(err);
            }
                return done(err, user);
            });
        } else {
            //found user, return
            return done(err, user);
        }
    });
  }
)

module.exports = strategy
