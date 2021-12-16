const use = errorCatcher => (request, response) => {
    Promise.resolve(errorCatcher(request, response)).catch(
        (error) => {
            return response.status(500).json(error)
        }
    )
}

module.exports = { use }