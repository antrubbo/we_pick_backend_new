const express = require("express")
const cors = require("cors")
const app = express()
const moviesController = require("./controllers/moviesController.js")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("WePick Homepage request")
})

app.use("/movies", moviesController)

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
})

module.exports = app