const model = require("../models/appointment.model")
const authModel = require("../models/auth.model")
const statusCode = require("../constants/status-code")

const fieldToSkip = {
    createdAt: 0,
    updatedAt: 0
}

async function myAppointments(id) {
    const filter = {
        '$and': [{
            'doctor_id': id
        }, {
            'status': 'Approved'
        }]
    }
    const result = await model.find(filter, fieldToSkip).sort({ "time": 1 })
    return { statusCode: statusCode.ok, message: result }
}

async function pendingAppointment(id) {
    const filter = {
        '$and': [{
            'doctor_id': id
        }, {
            'status': 'pending'
        }]
    }
    const result = await model.find(filter, fieldToSkip)
    return { statusCode: statusCode.ok, message: result }
}

async function updateAppointment(id, body) {
    const result = await model.findByIdAndUpdate(id, body)
    return { statusCode: statusCode.ok, message: "Updated successfully" }
}

async function getDoctors() {
    const fieldToSkip = { email: 0, password: 0, role: 0, createdAt: 0, updatedAt: 0 }
    const doctors = await authModel.find({ role: "doctor" }, fieldToSkip)
    return { statusCode: statusCode.ok, message: doctors }
}

module.exports = {
    myAppointments,
    pendingAppointment,
    updateAppointment,
    getDoctors
}