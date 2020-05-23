const router = require("express").Router();
let Log = require("../models/log.model");

router.route("/").get((req, res) => {
    Log.find()
        .then(log => res.json(log))
        .catch(err =>res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const email = req.body.email;
    const habit = req.body.habit;
    const log = req.body.log;

    const newLog = new Log({
        email,
        habit,
        log,
    });

    newLog.save()
        .then (() => res.json("Data logged!"))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/delete").delete((req, res) => {
    const email = req.body.email;
    const habit = req.body.habit;
    const log = req.body.log;

    console.log(log);

    Log.deleteOne({log: log})
        .then(() => res.json("Data deleted!"))
        .catch(err => res.status(400).json("Error: " + err));
    });


module.exports = router;