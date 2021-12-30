const model = require("../models/appointment.model")
const authModel = require("../models/auth.model")
const statusCode = require("../constants/status-code")

async function myAppointments(id) {
    const result = await model.find({ patient_id: id }).sort({ "status": 1 })
    return { statusCode: statusCode.ok, message: result }
}

async function sendAppointment(body) {
    const patient = await authModel.findOne({ _id: body.patient_id })
    body.patient = patient.name
    const user = new model(body)
    await user.save()
    return { statusCode: statusCode.ok, message: "Request Send !!!" }
}

module.exports = {
    myAppointments,
    sendAppointment
}