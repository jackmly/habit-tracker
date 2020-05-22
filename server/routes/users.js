const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const newUser = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });

    newUser.save()
        .then (() => res.json("User added!"))
        .catch(err => res.status(400).json("Error: " + erro));
});

module.exports = router;