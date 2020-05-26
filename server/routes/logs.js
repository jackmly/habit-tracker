const router = require("express").Router();
let Log = require("../models/log.model");

router.route("/").get((req, res) => {
    if (req.user) {
    Log.find({userId: req.user._id})
        .then(data => res.json(data))
        .catch(err =>res.status(400).json("Error: " + err));
    } else {
        res.json("user not logged in");
    }
});

router.route("/add").post((req, res) => {

    const newLog = new Log({
        userId: req.user._id,
        log: req.body.log
    });

    console.log("Log added: ", newLog);

    newLog.save()
        .then (() => res.json("Data logged!"))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/delete").delete((req, res) => {

    const deletedLog = {
        log: req.body.log,
        userId: req.user._id
    }

    console.log("Log deleted: ", deletedLog);
    
    Log.deleteOne(deletedLog)
        .then(() => res.json("Data deleted!"))
        .catch(err => res.status(400).json("Error: " + err));
    });


module.exports = router;