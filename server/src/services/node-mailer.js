const nodemailer = require("nodemailer")
const tokenMiddleware = require("../middleware/token.middleware")

async function sendEmail(request, response) {
    const email = request.body.email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    })
    const token = await tokenMiddleware.createToken(email)
    const data =
        `
Hi,

Greetings.

You can reset your password by clicking the following link.

link: http://localhost:4200/reset-password/${token}

Regards,
Appoinment Booking Admin
`
    let mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: "Password Reset Link",
        text: data
    }
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