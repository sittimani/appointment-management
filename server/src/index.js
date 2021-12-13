const express = require("express")
const connection = require("./services/connection")
const patientRoute = require("./routes/patient.routes")
const doctorRoute = require("./routes/doctor.routes")
const authRoute = require("./routes/auth.routes")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(cors())
app.use(patientRoute)
app.use(doctorRoute)
app.use(authRoute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})