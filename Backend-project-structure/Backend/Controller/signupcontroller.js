const { User } = require('../Model/User');
const bcrypt = require("bcrypt")
const {generateOtp, OtpExpiry} = require("../utils/Otphelper")
const {SendEmail} = require("../Config.js/emailService")

const signupController = async (req, res) => {
    try {
        const { firstname, lastname, role, storename, email, password, age, phone } = req.body;


        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

        if (existingUser) {
            if (existingUser.email === email) {
                return res.status(400).json({ message: "Email already Registered" });
            }
            if (existingUser.phone === phone) {
                return res.status(400).json({ message: "Phone number already Registered" });
            }
        }

        const Otp = generateOtp()
        const OtpExpire = OtpExpiry()

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            firstname,
            lastname,
            role,
            storename: role === "seller" ? storename : undefined,
            email,
            password: hashedPassword,
            age,
            phone,
            Otp,
            OtpExpire,
            isVerified: false,
        });

        const emailSend = await SendEmail(email, Otp)
        if(!emailSend){
            res.status(500).json({error: "Failed to send Otp to Email"})
        }

        res.status(201).json({
            message: "User registered successfully. OTP sent to your email",
            email: email,
            userId: newUser._id,
        })

    } catch (error) {
        console.error("Signup user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { signupController };