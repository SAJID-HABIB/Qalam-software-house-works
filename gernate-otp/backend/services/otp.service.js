import User from "../models/optSchema.js";
import generateOTP from "../utils/generateOTP.js";
import sendEmail from "../utils/sendEmail.js";

// ======================
// Send OTP
// ======================
 const sendOTPService = async (email) => {
  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  // Generate OTP
  const otp = generateOTP();

  // OTP Expiry (5 Minutes)
  const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

  // Save OTP
  user.otp = otp;
  user.otpExpiry = otpExpiry;

  await user.save();

  // Send Email
  await sendEmail(
    email,
    "Email Verification OTP",
    `Your OTP is: ${otp}`
  );

  return {
    success: true,
    message: "OTP sent successfully",
  };
};

// ======================
// Verify OTP
// ======================
 const verifyOTPService = async (email, otp) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  if (user.otpExpiry < new Date()) {
    throw new Error("OTP has expired");
  }

  // Update User
  user.isVerified = true;
  user.otp = null;
  user.otpExpiry = null;

  await user.save();

  return {
    success: true,
    message: "OTP verified successfully",
  };
};

// ======================
// Resend OTP
// ======================
 const resendOTPService = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const otp = generateOTP();

  user.otp = otp;
  user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

  await user.save();

  await sendEmail(
    email,
    "Resend OTP",
    `Your new OTP is: ${otp}`
  );

  return {
    success: true,
    message: "OTP resent successfully",
  };
};

export default { sendOTPService, verifyOTPService, resendOTPService };