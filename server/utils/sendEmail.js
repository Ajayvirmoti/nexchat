const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  const { HOST, SERVICE, EMAIL_PORT, SECURE, USER, PASS } = process.env;
  try {
    // const transporter = nodemailer.createTransport({
    //   host: HOST,
    //   service: SERVICE,
    //   port: 587,
    //   secure: Boolean(SECURE),
    //   auth: {
    //     user: 'email.ajaysingh01@gmail.com',
    //     pass: 'Starindia@8433',
    //   },
    // });

    // console.log(EMAIL_PORT)

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'ana.pollich@ethereal.email',
          pass: 'FgXem8Q6x6Ja83R334'
      }
  });

    await transporter.sendMail({
      from: USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
