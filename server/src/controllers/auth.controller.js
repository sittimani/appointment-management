const tokenMiddleware = require("../middleware/token.middleware")
const model = require("../models/auth.model")
const mailSender = require("../services/mail-sender")

async function login(request, response) {
    const { email, password } = request.body
    const data = await model.findOne({ email: email })
    if (data) {
        console.log(data)
        if (data.emailVerified) {
            const result = checkPassword(data, password)
            result ? loggedIn(response, data) : misMatchPassword(response)
        } else
            response.status(400).json("Email is not verified yet")
    } else {
        response.status(404).json("Not found")
    }
}

async function register(request, response) {
    let body = request.body
    body.emailVerified = false
    const user = new model(body)
    const isUserExist = await model.findOne({ email: body.email })
    if (isUserExist) {
        response.status(403).json("User Already Exists")
    } else {
        const result = await user.save()
        mailSender.verificationMail(request, response, result._id)
        response.status(200).json("Registered Successfully, Check you mail for activation link !!!")
    }
}

function checkPassword(user, password) {
    return user.password === password
}

async function loggedIn(response, user) {
    const token = await tokenMiddleware.createToken(user._id)
    const data = {
        _id: user._id,
        token: token,
        role: user.role
    }
    response.status(200).json(data)
}

function misMatchPassword(response) {
    response.status(400).json("Invalid password")
}

async function sendResetLink(request, response) {
    const email = request.body.email
    const result = await model.findOne({ email: email })
    if (result)
        return mailSender.resetMail(request, response)
    response.status(404).json("User Not Found !!!")
}

async function resetPassword(request, response) {
    const body = request.body
    const token = request.params.token
    const payload = await tokenMiddleware.passwordToken(token)
    if (payload) {
        const result = await model.findOne({ email: payload })
        if (result !== null) {
            await model.updateOne({ email: payload }, { $set: { password: body.password } })
            return response.status(200).json("Password Changed Successfully !!!")
        }
        return response.status(404).json("Invalid Url")
    }
    response.status(400).json("Url Time Exceeded !!!")
}

async function verifyUser(request, response) {
    const id = request.params.id
    const result = await model.updateOne({ _id: id }, { $set: { emailVerified: true } })
    if (result.modifiedCount === 0)
        return response.status(400).json("Invalid Url !!!")
    response.status(200).json("User verified Successfully")
}

module.exports = {
    login,
    register,
    sendResetLink,
    resetPassword,
    verifyUser
}