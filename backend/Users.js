const express = require("express")
const route = express.Router()
const user = require('./UserSchema')
route.post("/user", (req, res) => {
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

})
module.exports = route