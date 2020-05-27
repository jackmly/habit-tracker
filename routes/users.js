const router = require("express").Router();
let User = require("../models/user.model");
const passport = require("../passport");

router.get("/", function (req, res) {
  console.log("===== user!!======");
  console.log(req.sessionID);
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.get("/login", function (req, res) {});

router.get("/register", function (req, res) {});

router.get("/logout", function (req, res) {
  if (req.user) {
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        res.clearCookie("connect.sid"); // clean up!
        return res.send({ msg: "You have been logged out!" });
      };
    });
  } else {
    res.send({ msg: "No user to log out" });
  }
});

router.post("/register", function (req, res) {
  console.log(req.body);
  User.register({ username: req.body.username }, req.body.password, function (
    err,
    user
  ) {
    if (err) {
      res.json({
        success: false,
        message: "Your account could not be saved. Error: ",
        err,
      });
    } else {
      passport.authenticate("local")(req, res, function () {
        res.json({ success: true, user });
      });
    }
  });
});

router.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      res.json({
        success: false,
        message: "Your account could not be saved. Error: ",
        err,
      });
    } else {
      passport.authenticate("local")(req, res, function () {
        res.json({ success: true, user });
      });
    }
  });
});

router.get("/auth/google", 
  passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/auth/google/home",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
        res.redirect("http://localhost:3000");
    }
);

module.exports = router;
