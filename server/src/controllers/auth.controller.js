const tokenMiddleware = require("../middleware/token.middleware")
const model = require("../models/auth.model")

async function login(request, response) {
    const { email, password } = request.body
    const data = await model.find({ email: email })
    if (data) {
        const result = checkPassword(data, password)
        result ? loggedIn(response, data) : misMatchPassword(response)
    } else {
        response.status(404).json("Not found")
    }
}

async function register(request, response) {
    body = request.body
    const user = new model(body)
    const isUserExist = await model.find({ email: body.email })
    if (isUserExist) {
        response.status(403).json("User Already Exists")
    } else {
        const result = await user.save()
        const token = await tokenMiddleware.createToken(result._id)
        const data = {
            _id: result._id,
            token: token,
            role: body.role
        }
        response.status(200).json(data)
    }
}

function checkPassword(user, password) {
    console.log(user[0], password)
    return user[0].password === password
}

async function loggedIn(response, user) {
    console.log(user[0]._id)
    const token = await tokenMiddleware.createToken(user[0]._id)
    const data = {
        _id: user[0]._id,
        token: token,
        role: user[0].role
    }
    response.status(200).json(data)
}

function misMatchPassword(response) {
    response.status(400).json("Invalid password")
}

module.exports = {
    login,
    register
}