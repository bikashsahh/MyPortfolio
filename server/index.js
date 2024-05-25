// Import necessary modules
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors"; // Import the cors middleware
import env from "dotenv";
env.config();

// Create an instance of Express
const app = express();
const PORT = 3001; // Or any other port you prefer

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the cors middleware
app.use(cors());

// Route to handle form submission
app.post("/sendemail", (req, res) => {
    const { fullName, email, subject, message } = req.body;
    //   console.log("sendmaanlkdf" + fullName + " "+email);
      console.log("sendmaanlkdf" + req.body);

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.WORD,
    },
  });

  // Email message options
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: subject || "New Message from Contact Form",
    text: `
      Name: ${fullName}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
