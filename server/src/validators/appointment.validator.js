const joi = require("joi")


const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const appointmentRequestValidator = (request, response, next) => {
    const schema = joi.object({
        doctor: joi.string().required(),
        doctor_id: joi.string().required(),
        patient_id: joi.string().required(),
        status: joi.string().required(),
        time: joi.string().required(),
        patient: joi.string().optional(),
        date: joi.string().required()
    })
    const result = schema.validate(request.body)
    if (result.error) {
        response.status(500).json(result.error)
    } else {
        next()
    }
}

module.exports = {
    appointmentRequestValidator
}