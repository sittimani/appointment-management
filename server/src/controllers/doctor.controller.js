const service = require("../services/doctor.service")
const responseSender = require("../services/response-sender")

async function getMyAppointments(request, response) {
    const id = request.params.id
    const result = await service.myAppointments(id)
    responseSender(response, result)
}

async function pendingAppointment(request, response) {
    const id = request.params.id
    const result = await service.pendingAppointment(id)
    responseSender(response, result)
}

async function updateAppointment(request, response) {
    const id = request.params.id
    const body = request.body
    const result = await service.updateAppointment(id, body)
    responseSender(response, result)
}

async function getDoctors(request, response) {
    const result = await service.getDoctors()
    responseSender(response, result)
}

module.exports = {
    getMyAppointments,
    pendingAppointment,
    updateAppointment,
    getDoctors
}