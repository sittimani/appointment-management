const nodemailer = require("nodemailer")
const statusCode = require("../constants/status-code")

async function sendEmail(mailOptions) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    })
    try {
        await transporter.sendMail(mailOptions)
        return { statusCode: statusCode.ok, message: "mail send successfully" }
    } catch (error) {
        return { statusCode: statusCode.serverIssue, message: "Internal server problem" }
    }

}

module.exports = {
    sendEmail
}