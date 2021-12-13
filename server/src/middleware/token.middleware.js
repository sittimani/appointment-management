const jwt = require("jsonwebtoken")

async function createToken(data) {
    const token = await jwt.sign(data, process.env.SECREAT_KEY)
    return token
}

function verifyToken(request, response, next) {
    const headers = request.headers.authorization
    if (!headers)
        response.status(200).json("Unauthorized Access")
    const token = headers.split(" ")[1]
    try {
        if (!token)
            response.status(200).json("Unauthorized Access")
        const payload = jwt.verify(token, process.env.SECREAT_KEY)
        request.user = payload
        next()
    } catch (error) {
        console.log(error);
        response.status(200).json("Unauthorized Access")
    }
}

module.exports = {
    createToken,
    verifyToken
}