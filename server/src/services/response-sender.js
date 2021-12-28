function response(response, result) {
    return response.status(result.statusCode).json(result.message)
}

module.exports = response