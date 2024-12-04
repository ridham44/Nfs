const express = require('express');
const mongoose = require('mongoose');
const F1Review = require('./f1review.js');

const router = express.Router();

// Check if a review exists for the specified team and email
router.get('/f1review', async (req, res) => {
    const { email, team } = req.query;
    const reviewExists = await F1Review.findOne({ email, team }); // Use F1Review model here
    res.json({ exists: !!reviewExists });
});

// Submit a review
router.post('/f1review', async (req, res) => {
    const { username, email, review, team } = req.body;
    const newReview = new F1Review({ username, email, review, team }); // Use F1Review model
    await newReview.save();
    res.status(201).json({ message: 'Review submitted!' });
});

module.exports = router;
