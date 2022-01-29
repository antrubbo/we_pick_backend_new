const express = require("express")
const router = express.Router()

const movies = require("../controllers/moviesController.js")

router.get("/", movies.getAll)
router.get("/search", movies.search)
router.get("/:id", movies.getOne)

module.exports = router