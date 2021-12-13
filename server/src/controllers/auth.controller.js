const creditionals = require("../creditionals")
const tokenMiddleware = require("../middleware/token.middleware")

function login(request, response) {
    const { email, password } = request.body
    const user = creditionals.getUser(email)
    if (user) {
        const result = checkPassword(user, password)
        result ? loggedIn(response, user) : misMatchPassword(response)
    } else {
        response.status(404).json("Not found")
    }
}

async function register(request, response) {
    body = request.body
    body._id = (Math.round(Math.random() * 10000)).toString()
    creditionals.setUser(body)
    const token = await tokenMiddleware.createToken(body._id)
    const data = {
        _id: body._id,
        token: token,
        role: body.role
    }
    response.status(200).json(data)
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

module.exports = {
    login,
    register
}