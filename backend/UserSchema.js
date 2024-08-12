const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    RegId: String,
    InTime: String,
    OutTime: String
})
module.exports = mongoose.model("user", Schema)