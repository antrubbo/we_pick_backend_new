const express = require("express")
const router = express.Router()

const users = require("../controllers/usersController.js")

router.get("/", users.getAll)
router.get("/:id", users.getOne)
router.post("/", users.create)
router.delete("/:id", users.deleteOne)

module.exports = router