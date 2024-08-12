const express = require('express')
const route = express.Router()
const users = require('./UserSchema')

route.post("/db", async (req, res) => {
    try {
        const re = await users.find({OutTime:""})
        // console.log("db=", re);
        res.send(re)
    } catch (error) {
        console.log("error in db");
        res.send("error")
    }

})
module.exports = route