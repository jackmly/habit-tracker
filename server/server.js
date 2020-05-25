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
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

mongoose.connect("mongodb://localhost:27017/habitDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established")
});

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


app.listen(port, () => {
    console.log("Server is running on port", port);
});