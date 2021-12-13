const dataService = require("../data")


function getMyAppointments(request, response) {
    const id = request.params.id
    const data = dataService.getData()
    const result = data.filter(user => {
        return user.patient_id === id
    })
    response.status(200).json(result)
}

function sendAppointment(request, response) {
    const body = request.body
    dataService.setData(body)
    response.status(200).json("Successfully added")
}

module.exports = {
    getMyAppointments,
    sendAppointment
}