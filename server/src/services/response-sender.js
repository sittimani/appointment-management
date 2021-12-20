function response(response, result) {
    response.status(result.statusCode).json(result.message)
}

module.exports = response