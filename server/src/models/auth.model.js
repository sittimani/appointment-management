const mongoose = require("mongoose")

const Schema = mongoose.Schema

const authSchema = new Schema({
    name: {
        type: String
    },
    role: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    emailVerified: {
        type: Boolean
    }
}, { timestamps: true, versionKey: false })

const model = mongoose.model('authSchema', authSchema, 'creditionals')

module.exports = model