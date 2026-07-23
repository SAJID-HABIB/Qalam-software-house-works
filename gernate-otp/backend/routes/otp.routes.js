import express from "express";

import {
  sendOTP,
  verifyOTP,
  resendOTP,
} from "../controllers/otp.controller.js";

import {
  sendOTPValidation,
} from "../middlewares/sendOTP.validation.js";

import {
  verifyOTPValidation,
} from "../middlewares/verifyOTP.validation.js";

import {
  resendOTPValidation,
} from "../middlewares/resendOTP.validation.js";

const router = express.Router();

router.post("/send-otp", sendOTPValidation, sendOTP);

router.post("/verify-otp", verifyOTPValidation, verifyOTP);

router.post("/resend-otp", resendOTPValidation, resendOTP);

export default router;
