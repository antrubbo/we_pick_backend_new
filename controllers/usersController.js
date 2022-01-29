const express = require("express")
const users = express.Router()

users.get("/", (req, res) => {
    res.json("This is the /users route")
})

module.exports = users