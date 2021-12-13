const router = require("express").Router()
const controller = require("../controllers/patient.controllers")
const errorHandler = require("../services/error-handler").use
const verifyToken = require("../middleware/token.middleware")
const validator = require("../validators/appointment.validator").appointmentRequestValidator

router.get("/patient-appointments/:id", [verifyToken.verifyToken], errorHandler(controller.getMyAppointments))
router.post("/add-appointment", [verifyToken.verifyToken, validator], errorHandler(controller.sendAppointment))


module.exports = router