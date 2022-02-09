const express = require("express")
const router = express.Router()

const movies = require("../controllers/moviesController.js")

router.get("/", movies.index)
// router.get("/search", movies.search)
router.get("/:id", movies.getById)

module.exports = router