const nodemailer = require("nodemailer");
console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS =", process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (email, otp) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Gym Verification OTP",
      html: `
        <h2>Your OTP</h2>
        <h1>${otp}</h1>
        <p>Valid for 10 minutes.</p>
      `,
    });

    console.log("Email sent successfully");
    console.log(info);
  } catch (error) {
    console.log("EMAIL ERROR:");
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;
