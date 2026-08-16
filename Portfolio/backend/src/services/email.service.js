import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendContactEmail = async (contactData) => {
    console.log("EMAIL FUNCTION HIT");
  const { name, email, subject, message } = contactData;
  try{
  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `New Contact Message: ${subject}`,
    text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message: ${message}`
  });
console.log("EMAIL SENT:", info.messageId);
console.log("ACCEPTED:", info.accepted);
console.log("REJECTED:", info.rejected);
 return info;
}catch(error) {
  console.error("email send",error);
  throw error;
}
};

export default transporter;
export {sendContactEmail} 
