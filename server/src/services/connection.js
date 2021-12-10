const mongoose = require("mongoose")

async function connectToDB() {
    const db = process.env.DB_ADDRESS + process.env.DBNAME
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    return new Promise((resolve, reject) => {
        mongoose.connect(db, options, error => {
            if (error) {
                console.error(error);
                reject(false)
            } else {
                resolve(true)
            }
        })
    })
}

module.exports = { connectToDB }