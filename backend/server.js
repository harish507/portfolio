const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook or SendGrid
  auth: {
    user: 'harishaws1277@gmail.com', // Your email address
    pass: 'rsfp mfga hsqs aell'   // Your email password (or app-specific password)
  }
});

// POST route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Set up email data
  const mailOptions = {
    from: 'harishaws1277@gmail.com',
    to: 'harishbali1997@gmail.com', // The email address to receive the form submission
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error
    return res.status(500).send({ message: 'Error sending email', error: error.message });
    }
    res.status(200).send({ message: 'Email sent successfully!' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

