const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
      user: "risshi2323@yahoo.com",
      pass: "@Rash0025",
    },
  });

  const mailOptions = {
    from: "risshi2323@yahoo.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
