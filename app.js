const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.post("/send_gmail", (req, res) => {
  const { email } = req.body;
  console.log(email);
  let num = Math.trunc(Math.random() * 10000);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mayinpars@gmail.com",
      pass: "rfmklombvtjvklfi", // google account dan olinadi // nastroyki akkaunta
    },
  });

  const mailOptions = {
    from: "mayinpars@gmail.com",
    to: `${email}`,
    subject: "Sending email using NodeJs",
    html: `<b>Hello, this is your verification code ${num}</b>`,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send({
    msg: "Message sent!",
  });
});

app.listen(4000, () => {
  console.log("4000 port is running");
});
