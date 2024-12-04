const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const authRoutes = require("./js/auth.js");
const f1ReviewRouter = require("./js/f1.js");
const User = require("./js/user.js"); 
const Sub = require("./js/sub.js")

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json());

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
  })
);

// MongoDB connection URI
const mongoURI = "mongodb://127.0.0.1:27017/nfs"; // Fixed typo in port

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 90000, // Increase timeout for connection
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Signup route
app.post("/api/signup", async (req, res) => {
  try {
    const { name, age, sex, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const newUser = new User({
      name,
      age,
      sex,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      // Duplicate key error
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Error registering user", error });
    }
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", req.body);

  try {
    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) {
      console.log("User not found with email:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res
      .status(200)
      .json({ success: true, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "44enzoferrari@gmail.com",
    pass: "axsa forb pcaw wrdt",
  },
});

// Subscribe endpoint
app.post("/api/subscribe", async (req, res) => {
  const { name, email } = req.body;

  try {
    // Save name and email to MongoDB
    const newUser = new Sub({ name, email });
    await newUser.save();

    // Prepare and send welcome email
    const mailOptions = {
      from: "44enzoferrari@gmail.com", // replace with your email
      to: email,
      subject: "Welcome to NFS Club",
      html: `<h1>Welcome to NFS Club!</h1>
             <p>Dear ${name},</p>
             <p>Thank you for subscribing to NFS Club! We're thrilled to have you on board. Stay tuned for the latest updates on our products and new cars.</p>
             <p>Best regards,<br>NFS Club Team</p>`,
    };

    // Send welcome email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res
      .status(200)
      .json({ message: "Subscription successful. Welcome email sent!" });
  } catch (error) {
    console.error("Error processing subscription:", error);
    if (!res.headersSent) {
      // Ensure headers aren't sent yet
      res.status(500).json({
        message: "An error occurred while processing your subscription.",
      });
    }
  }
});

// Use the F1 and authentication routes
app.use("/api", f1ReviewRouter);
app.use("/api", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
