const model = require("../models/appointment.model")
const authModel = require("../models/auth.model")

async function getMyAppointments(request, response) {
    const id = request.params.id
    const result = await model.find({ patient_id: id })
    response.status(200).json(result)
}

async function sendAppointment(request, response) {
    let body = request.body
    const patient = await authModel.findOne({ _id: body.patient_id })
    body.patient = patient.name
    const user = new model(body)
    const result = await user.save()
    if (result)
        response.status(200).json("Successfully added")
}

module.exports = {
    getMyAppointments,
    sendAppointment
}