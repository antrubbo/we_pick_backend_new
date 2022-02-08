const express = require("express")
const router = express.Router()

const users = require("../controllers/usersController.js")

router.get("/", users.getAll)
router.get("/login", users.login)
router.post("/", users.create)
router.get("/:id", users.getOne)
// router.put("/:id", users.update)
router.delete("/:id", users.deleteOne)

module.exports = router