const router = require("express").Router()
const controller = require("../controllers/doctor.controller")

router.get("/doctor-appointments/:id", controller.getMyAppointments)
router.get("/pending-appointments/:id", controller.pendingAppointment)
router.put("/update-appointment", controller.updateAppointment)

module.exports = router