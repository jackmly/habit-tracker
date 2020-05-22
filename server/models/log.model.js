const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    email: String,
    habit: String,
    log: String,
});

const Log = new mongoose.model("Log", logSchema)

module.exports = Log;