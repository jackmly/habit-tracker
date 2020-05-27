const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    userId: String,
    log: String,
});

const Log = new mongoose.model("Log", logSchema)

module.exports = Log;