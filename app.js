const express = require("express")
const cors = require("cors")
const app = express()
// const moviesController = require("./controllers/moviesController.js")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("WePick Homepage request")
})

const db = require("./models");
db.sequelize.sync();

const movieRoutes = require("./routes/movie.routes.js")
app.use("/api/movies", movieRoutes)
const userRoutes = require("./routes/user.routes.js")
app.use("/api/users", userRoutes)

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
})

module.exports = app