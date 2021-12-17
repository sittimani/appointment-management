const nodemailer = require("nodemailer")

async function sendEmail(request, response, mailOptions) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    })
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return response.status(500).json("cannot send mail")
        }
        response.status(200).json("mail send successfully")
    })
}

module.exports = {
    sendEmail
}