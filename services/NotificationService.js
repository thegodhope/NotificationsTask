const nodemailer = require("nodemailer");

const sendEmailNotification = async (email, subject, message) => {
  let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let mailOptions = {
    from: "noreply@example.com",
    to: email,
    subject: subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};

const sendMobileNotification = async (mobile, message) => {
  // mobile notification code comes here
};

module.exports = {
  sendEmailNotification,
  sendMobileNotification,
};
