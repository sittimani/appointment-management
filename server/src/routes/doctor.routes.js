const router = require("express").Router()
const controller = require("../controllers/doctor.controller")
const token = require("../middleware/token.middleware")

router.get("/doctor-appointments/:id", token.verifyToken, controller.getMyAppointments)
router.get("/pending-appointments/:id", token.verifyToken, controller.pendingAppointment)
router.put("/update-appointment", token.verifyToken, controller.updateAppointment)
router.get("/get-doctors", token.verifyToken, controller.getDoctors)

module.exports = router