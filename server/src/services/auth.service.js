const model = require("../models/auth.model")
const tokenMiddleware = require("../middleware/token.middleware")
const statusCode = require("../constants/status-code")
const mailSender = require("../services/mail-sender")

async function loginUser(email, password) {
    const data = await model.findOne({ email: email })
    if (data)
        return await checkCreditionals(data, password)
    return { statusCode: statusCode.notFound, message: "Not found" }
}

function checkCreditionals(data, password) {
    if (data.emailVerified) {
        const result = checkPassword(data, password)
        return result ? loggedIn(data) : misMatchPassword()
    }
    return { statusCode: statusCode.badRequest, message: "Email is not verified yet" }
}

function checkPassword(user, password) {
    return user.password === password
}

function misMatchPassword() {
    return { statusCode: statusCode.badRequest, message: "Invalid Password" }
}

async function loggedIn(user) {
    const token = await tokenMiddleware.createToken(user._id)
    const data = {
        _id: user._id,
        token: token,
        role: user.role
    }
    return { statusCode: statusCode.ok, message: data }
}

async function registerUser(body) {
    const user = new model(body)
    const isUserExist = await model.findOne({ email: body.email })
    if (isUserExist)
        return { statusCode: statusCode.forbidden, message: "Usr Already exists" }
    const userDetails = await user.save()
    const result = await mailSender.verificationMail(body.email, userDetails._id)
    return result
}

async function resetLink(email) {
    const result = await model.findOne({ email: email })
    if (result)
        return await mailSender.resetMail(email)
    return { statusCode: statusCode.notFound, message: "User Not Found !!!" }
}

async function resetPassword(body, token) {
    const payload = await tokenMiddleware.passwordToken(token)
    if (payload) {
        const result = await model.findOne({ email: payload })
        return changePassword(result, payload, body)
    }
    return { statusCode: statusCode.badRequest, message: "Url Time Exceeded !!!" }
}

async function changePassword(result, payload, body) {
    if (result !== null) {
        await model.updateOne({ email: payload }, { $set: { password: body.password } })
        return { statusCode: statusCode.ok, message: "Password Changed Successfully !!!" }
    }
    return { statusCode: statusCode.notFound, message: "Invalid Url" }
}

async function verifyUser(id) {
    const result = await model.updateOne({ _id: id }, { $set: { emailVerified: true } })
    if (result.modifiedCount === 0)
        return { statusCode: statusCode.badRequest, message: "Invalid Url !!!" }
    return { statusCode: statusCode.ok, message: "User verified Successfully" }
}

module.exports = {
    loginUser,
    registerUser,
    resetLink,
    resetPassword,
    verifyUser
}