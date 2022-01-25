const express = require("express")
const movies = express.Router()

movies.get("/", (req, res) => {
    res.json("This is the /movies route")
})

movies.get("/movies/:id", (req, res) => {
    res.json()
})

module.exports = movies