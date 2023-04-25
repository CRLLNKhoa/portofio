const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/sign-up", userController.createUser)
router.post("/sign-in", userController.loginUser)
router.put("/update-info/:id", userController.updateUser)
router.put("/update-info-array/:id", userController.updateUserPush)
router.put("/remove-info-array/:id", userController.updateUserPull)
router.put("/update-info-skill/:id", userController.updateUserSkill)
router.delete("/delete-user/:id", userController.deleteUser)
router.get("/all-users", userController.getAllUser)
router.get("/get-user/:id", userController.getUser)
router.get("/get-view/:slug", userController.getView)

module.exports = router