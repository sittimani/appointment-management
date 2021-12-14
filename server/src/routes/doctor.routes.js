const router = require("express").Router()
const token = require("../middleware/token.middleware")
const controller = require("../controllers/doctor.controller")
const errorHandler = require("../services/error-handler").use
const validator = require("../validators/appointment.validator").appointmentRequestValidator

router.get("/doctor-appointments/:id", [token.verifyToken], errorHandler(controller.getMyAppointments))
router.get("/pending-appointments/:id", [token.verifyToken], errorHandler(controller.pendingAppointment))
router.put("/update-appointment", [token.verifyToken, validator], errorHandler(controller.updateAppointment))
router.get("/get-doctors", [token.verifyToken], errorHandler(controller.getDoctors))

module.exports = router