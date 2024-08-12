const express = require("express")
const route = express.Router()
const user = require('./UserSchema')
route.post("/user", async (req, res) => {
    let check = await user.find({ RegId: req.body.RegId, OutTime: "" })
    if (check.length == 0) {
        console.log(check.length)
        const data = new user({
            RegId: req.body.RegId,
            InTime: req.body.InTime,
            OutTime: req.body.OutTime,
        })
            .save()
            .then(() => {
                console.log("Data Saved");
                res.send("Done")
            })
            .catch(() => {
                console.log("Data Saved");
                res.send('failed')
            })
    }
    else {
        res.send("Already Present")
    }

})
module.exports = route