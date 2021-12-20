const use = errorCatcher => (request, response) => {
    Promise.resolve(errorCatcher(request, response)).catch(
        (error) => {
            console.log("error")
            console.log(error)
            return response.status(500).json(error)
        }
    )
}

module.exports = { use }