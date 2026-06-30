require('dotenv').config();

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

const SendEmail = async (email, Otp) => {
    try {

        await transport.sendMail({
            from: process.env.USER_EMAIL,
            to: email,
            subject: "Your Otp For Email verification",
            html:
                `<div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                <h2>Email Verification</h2>
                <p>Your OTP is:</p>
                <h1 style="color: #indigo; font-size: 32px; letter-spacing: 2px;">${Otp}</h1>
                <p>This OTP will expire in 5 minutes.</p>
                <p style="color: #999; font-size: 12px;">If you didn't request this, please ignore this email.</p>
                </div>`})

        return true
    } catch (err) {
        console.error("Email Sending Error:", err)
        return false
    }
}


module.exports = { SendEmail }