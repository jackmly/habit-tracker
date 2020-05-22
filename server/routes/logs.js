const router = require("express").Router();
let Log = require("../models/log.model");

router.route("/").get((req, res) => {
    Log.find()
        .then(log => res.json(log))
        .catch(err =>res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
    const email = req.body.email;
    const habit = req.body.habit;
    const log = req.body.log;

    console.log(req.body);

    const newLog = new Log({
        email,
        habit,
        log,
    });

    newLog.save()
        .then (() => res.json("Data logged!"))
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;