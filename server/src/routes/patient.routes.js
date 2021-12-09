const router = require("express").Router()
const controller = require("../controllers/patient.controllers")

router.get("/patient-appointments/:id", controller.getMyAppointments)
router.post("/add-appointment", controller.sendAppointment)


module.exports = router