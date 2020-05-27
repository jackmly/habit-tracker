const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema ({
    name: String,
    username: String,
    password: String,
    providerId: String,
    provider: String,
    dateAdded: {type: Date, default: Date.now}
  });
  
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

module.exports = User;