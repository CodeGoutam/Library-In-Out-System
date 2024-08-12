const express = require('express');
const router = express.Router()
const db = require('./UserSchema')
router.post("/exit", async (req, res) => {
    console.log(req.body.RegId);
    await db.updateOne(
        { RegId: req.body.RegId,OutTime:"" },
        { $set: { OutTime: req.body.OutTime } })
        .then((result) => {
            console.log("Exit Done");
            res.send("Exit Done")
        })
        .catch((e) => {
            res.send("e")
        })
})
module.exports = router