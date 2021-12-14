const router = require("express").Router()
const authValidator = require("../validators/auth.validator")
const registerValidator = require("../validators/register.validator")
const controller = require("../controllers/auth.controller")
const errorHandler = require("../services/error-handler").use

router.post("/login", [authValidator.validate], errorHandler(controller.login))
router.post("/register", [registerValidator.validate], errorHandler(controller.register))

module.exports = router