const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://hgoutam2001:library@cluster0.vdoo9iw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("db connected");
    }).catch(() => {
        console.log("Db connection error");
    })

app.post("/", (req, res) => {
    res.send("first")
})
app.use("/api", require("./Users"))
app.use("/api", require("./UserDB"))
app.use("/api", require("./Exit"))
app.listen(5000, () => {
    console.log(`Backend Started`);
})

