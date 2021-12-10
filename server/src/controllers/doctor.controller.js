const dataService = require("../data")
const creditionals = require("../creditionals")


function getMyAppointments(request, response) {
    const id = request.params.id
    const data = dataService.getData()
    const result = data.filter(user => {
        return user.doctor_id === id && user.status === "Approved"
    })
    response.status(200).json(result)
}

function pendingAppointment(request, response) {
    const id = request.params.id
    const data = dataService.getData()
    const result = data.filter(user => {
        return user.doctor_id === id && user.status === "pending"
    })
    response.status(200).json(result)
}

function updateAppointment(request, response) {
    const body = request.body
    const data = dataService.getData()
    const index = data.findIndex((user) => {
        return user.patient_id === body.patient_id && user.doctor_id === body.doctor_id && user.time === body.time
    })
    dataService.updateData(index, body)
    response.status(200).json("Updated successfully")
}


function getDoctors(request, response) {
    const doctors = creditionals.getDoctors()
    response.status(200).json(doctors)
}

module.exports = {
    getMyAppointments,
    pendingAppointment,
    updateAppointment,
    getDoctors

}