const service = require("../services/patient.service")
const responseSender = require("../services/response-sender")

async function getMyAppointments(request, response) {
    const id = request.params.id
    const result = await service.myAppointments(id)
    responseSender(response, result)
}

async function sendAppointment(request, response) {
    let body = request.body
    const result = await service.sendAppointment(body)
    responseSender(response, result)
}

module.exports = {
    getMyAppointments,
    sendAppointment
}