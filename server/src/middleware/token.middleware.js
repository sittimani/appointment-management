const jwt = require("jsonwebtoken")

async function createToken(data) {
    const token = await jwt.sign(data.toString(), process.env.SECREAT_KEY)
    return token
}

function verifyToken(request, response, next) {
    const headers = request.headers.authorization
    if (!headers)
        response.status(200).json("Unauthorized Access")
    else {
        handleToken(request, response, headers)
        next()
    }
}

function handleToken(request, response, headers) {
    try {
        const token = headers.split(" ")[1]
        if (!token)
            response.status(200).json("Unauthorized Access")
        const payload = jwt.verify(token, process.env.SECREAT_KEY)
        request.user = payload
    } catch (error) {
        return response.status(200).json("Unauthorized Access")
    }
}

function passwordToken(token) {
    try {
        const payload = jwt.verify(token, process.env.SECREAT_KEY)
        return payload
    } catch (error) {
        return null
    }
}

module.exports = {
    createToken,
    verifyToken,
    passwordToken
}