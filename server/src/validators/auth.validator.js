const joi = require("joi")

const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

function validate(request, response, next) {
    const validator = joi.object({
        email: joi.string().required().email(),
        password: joi.string().min(8).regex(regex).required()
    })
    const result = validator.validate(request.body)
    if (result.error) {
        response.status(400).json("Invalid Input")
    } else {
        next()
    }
}

module.exports = { validate }