require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const LocalStrategy = require('passport-local').Strategy
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');


const app = express();
let port = process.env.PORT;

if (port == null || port == "") {
  port = 5000;
}

if (process.env.NODE_END === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/habitDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established")
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
  cookie: { maxAge: 1000 * 3600 * 24 * 30 * 2 },
  secret: process.env.SECRET,
  store: new MongoStore({ mongooseConnection: connection }),
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const usersRouter = require("./routes/users");
const logsRouter = require("./routes/logs");

app.use("/api/logs", logsRouter);
app.use("/api/", usersRouter);

if (process.env.NODE_END === "production") {
  app.use(express.static(__dirname + "/client/build"));
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});