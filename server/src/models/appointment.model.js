const mongoose = require("mongoose")

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    doctor: {
        type: String
    },
    patient: {
        type: String
    },
    patient_id: {
        type: String
    },
    doctor_id: {
        type: String
    },
    time: {
        type: String
    },
    confirmation: {
        type: String
    }
}, { timestamps: true, versionKey: false })

const model = mongoose.model('appointmentSchema', appointmentSchema, 'creditionals')

module.exports = model