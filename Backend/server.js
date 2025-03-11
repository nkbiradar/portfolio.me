require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS,  // App password (not your real password)
    },
});

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,  // Visitor's email
        to: process.env.EMAIL_USER, // Your email where messages will be received
        subject: `New Message from ${name} - Portfolio`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!", messageId: info.messageId });
    } catch (error) {
        res.status(500).json({ message: "Email sending failed!", error: error.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
