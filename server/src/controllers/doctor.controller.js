const model = require("../models/appointment.model")
const authModel = require("../models/auth.model")

async function getMyAppointments(request, response) {
    const id = request.params.id
    const filter = {
        '$and': [{
            'doctor_id': id
        }, {
            'status': 'Approved'
        }]
    }
    const result = await model.find(filter)
    response.status(200).json(result)
}

async function pendingAppointment(request, response) {
    const id = request.params.id
    const filter = {
        '$and': [{
            'doctor_id': id
        }, {
            'status': 'pending'
        }]
    }
    const fieldToSkip = {
        createdAt: 0,
        updatedAt: 0
    }
    const result = await model.find(filter, fieldToSkip)
    response.status(200).json(result)
}

async function updateAppointment(request, response) {
    const id = request.params.id
    const body = request.body
    const result = await model.findByIdAndUpdate(id, body)
    if (result)
        response.status(200).json("Updated successfully")
}

async function getDoctors(request, response) {
    const fieldToSkip = { email: 0, password: 0, role: 0, createdAt: 0, updatedAt: 0 }
    const doctors = await authModel.find({ role: "doctor" }, fieldToSkip)
    response.status(200).json(doctors)
}

module.exports = {
    getMyAppointments,
    pendingAppointment,
    updateAppointment,
    getDoctors
}