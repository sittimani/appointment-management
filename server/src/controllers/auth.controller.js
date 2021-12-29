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
    body.invalidCount = 3
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

async function getMyMenu(request, respone) {
    const token = request.params.token
    const result = await service.getMenu(token)
    responseSender(respone, result)
}

async function reVerifyUser(request, response) {
    const id = request.params.id
    const result = await service.reVerifyUser(id)
    responseSender(response, result)
}

async function getUser(request, response) {
    const id = request.params.id
    console.log(id)
    const result = await service.getUser(id)
    responseSender(response, result)
}

async function updateUserProfile(request, response) {
    const id = request.params.id
    const result = await service.updateProfile(id, request.body)
    responseSender(response, result)
}

async function changePassword(request, response) {
    const body = request.body
    const result = await service.changePassword(body, request.user.id)
    console.log(result)
    responseSender(response, result)
}

module.exports = {
    login,
    register,
    sendResetLink,
    resetPassword,
    verifyUser,
    getMyMenu,
    reVerifyUser,
    getUser,
    updateUserProfile,
    changePassword
}