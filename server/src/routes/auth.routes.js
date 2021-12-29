const router = require("express").Router()
const authValidator = require("../validators/auth.validator")
const registerValidator = require("../validators/register.validator")
const controller = require("../controllers/auth.controller")
const token = require("../middleware/token.middleware")
const errorHandler = require("../services/error-handler").use

router.post("/login", [authValidator.validate], errorHandler(controller.login))
router.post("/register", [registerValidator.validate], errorHandler(controller.register))
router.post("/send-reset-link", errorHandler(controller.sendResetLink))
router.put("/reset-password/:token", errorHandler(controller.resetPassword))
router.put("/change-password", token.verifyToken, errorHandler(controller.changePassword))

router.get("/get-menu/:token", controller.getMyMenu)
router.get("/verify-user/:id", errorHandler(controller.verifyUser))
router.get("/reactivate-account/:id", controller.reVerifyUser)

router.get("/get-user/:id", [token.verifyToken], errorHandler(controller.getUser))
router.put("/update-profile/:id", [token.verifyToken], errorHandler(controller.updateUserProfile))


module.exports = router