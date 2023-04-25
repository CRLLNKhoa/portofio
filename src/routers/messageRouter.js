const express = require("express")
const router = express.Router()
const messageController = require("../controllers/messageController")

router.post("/send", messageController.send)
router.put("/update-message/:id", messageController.updateMessage)
router.delete("/delete-message/:id", messageController.deleteMessage)
router.get("/my-message/:id", messageController.getMessage)

module.exports = router