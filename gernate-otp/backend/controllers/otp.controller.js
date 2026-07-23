import {
  sendOTPService,
  verifyOTPService,
  resendOTPService,
} from "../services/otp.service.js";

// =======================
// Send OTP
// =======================
 const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await sendOTPService(email);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// =======================
// Verify OTP
// =======================
 const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const result = await verifyOTPService(email, otp);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Resend OTP
// =======================
 const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await resendOTPService(email);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default { sendOTP, verifyOTP, resendOTP };