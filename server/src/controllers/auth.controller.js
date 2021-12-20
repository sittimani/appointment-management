const model = require("../models/auth.model")
const service = require("../services/auth.service")
const responseSender = require("../services/response-sender")

async function login(request, response) {
    const { email, password } = request.body
    const result = await service.loginUser(email, password)
    responseSender(response, result)
}

async function register(request, response) {
    let body = request.body
    body.emailVerified = false
    const result = await service.registerUser(body)
    responseSender(response, result)
}

async function sendResetLink(request, response) {
    const email = request.body.email
    const result = await service.resetLink(email)
    responseSender(response, result)
}

async function resetPassword(request, response) {
    const body = request.body
    const token = request.params.token
    const result = await service.resetPassword(body, token)
    responseSender(response, result)
}

async function verifyUser(request, response) {
    const id = request.params.id
    const result = await service.verifyUser(id)
    responseSender(response, result)
}

module.exports = {
    login,
    register,
    sendResetLink,
    resetPassword,
    verifyUser
}