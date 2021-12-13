const joi = require("joi")

const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

function validate(request, response, next) {
    const validator = joi.object({
        name: joi.string().required(),
        email: joi.string().required().email(),
        password: joi.string().min(8).regex(regex).required(),
        role: joi.string().required().equal("patient")
    })
    const result = validator.validate(request.body)
    if (result.error) {
        response.status(400).json("Invalid Input")
    } else {
        next()
    }
}

module.exports = { validate }