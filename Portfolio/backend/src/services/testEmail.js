import "dotenv/config";
import transporter from "./email.service.js";

const testEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "email test",
      text: "nodemailer work successfully"
    })
        console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("email transport error",error);
  }
}

testEmail();