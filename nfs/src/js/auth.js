const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./user.js"); 
const Review = require("./sitereview.js"); 
const router = express.Router();

// Secret key from environment
const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-key";

// Signup route
router.post("/signup", async (req, res) => {
  const { name, sex, age, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      age,
      sex,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(200).json({ message: "Logged in successfully", token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Check if a review exists for the email
router.post("/check-review", async (req, res) => {
  const { email } = req.body;

  try {
    const existingReview = await Review.findOne({ email });
    if (existingReview) {
      return res.json({ exists: true });
    }
    return res.json({ exists: false });
  } catch (err) {
    console.error("Error checking review:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Submit a review
router.post("/submit-review", async (req, res) => {
  const { name, email, review } = req.body;

  try {
    const existingReview = await Review.findOne({ email });
    if (existingReview) {
      return res.status(400).json({ message: "Review already submitted" });
    }

    const newReview = new Review({ name, email, review });
    await newReview.save();

    res.status(201).json({ message: "Review submitted successfully" });
  } catch (err) {
    console.error("Error submitting review:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Middleware to check if the user is logged in
router.get("/check-auth", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ loggedIn: false, message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ loggedIn: false, message: "Token missing" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ loggedIn: true, user });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ loggedIn: false, message: "Invalid or expired token" });
  }
});

module.exports = router;
