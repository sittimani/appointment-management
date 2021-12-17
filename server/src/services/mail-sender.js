const tokenMiddleware = require("../middleware/token.middleware")
const sendEmail = require("./node-mailer").sendEmail

async function resetMail(request, response) {
    const email = request.body.email
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
    return await sendEmail(request, response, mailOptions)
}

async function verificationMail(request, response, id) {
    const email = request.body.email
    const data =
        `
Hi,

Greetings.

You can find the following link to activate your account with us.

link: http://localhost:3000/verify-user/${id}

Regards,
Appoinment Booking Admin
`
    let mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: "Account Activation Link",
        text: data
    }
    return await sendEmail(request, response, mailOptions)
}

module.exports = {
    resetMail,
    verificationMail
}