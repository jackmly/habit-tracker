const User = require('../models/user.model')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(User.authenticate())

module.exports = strategy
