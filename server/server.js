require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/habitDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established")
});

const userSchema = new mongoose.Schema ({
  username: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());
 
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
  if (req.isAuthenticated()){
    res.status(200).json("Oks");
  } else {
    res.status(400).json("Not Signed sadfaIn");
  }
});

app.get("/login", function(req, res) {

});

app.get("/register", function(req, res) {

});


app.get("/logout", function(req, res){
  req.logout();
  res.redirect("http://localhost:3000")
})

app.post("/register", function (req, res) {
  console.log(req.body);
  User.register(
    {username: req.body.username}, req.body.password,
    function(err, user) {
      if (err) {
        res.json({success:false, message:"Your account could not be saved. Error: ", err})
      } else {
        passport.authenticate("local") (req, res, function(){
          res.json({success:true, user});
        });
      }
    });
});

app.post("/login", function(req, res){
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      res.json({success:false, message:"Your account could not be saved. Error: ", err})
    } else {
      passport.authenticate("local") (req, res, function(){
        res.json({success:true, user});
      });
    }
  });
});



const logsRouter = require("./routes/logs");

app.use("/api/logs", logsRouter);


app.listen(port, () => {
    console.log("Server is running on port 5000");
});