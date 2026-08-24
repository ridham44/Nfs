import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Review = () => {
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the user has already submitted a review by email
      const checkReviewResponse = await axios.post(
        "http://localhost:5000/api/check-review",
        {
          email: reviewData.email,
        }
      );

      if (checkReviewResponse.data.exists) {
        alert("You have already submitted a review.");
      } else {
        // If no review exists, submit the review
        const response = await axios.post(
          "http://localhost:5000/api/submit-review",
          reviewData
        );
        alert(response.data.message);
        setReviewData({ name: "", email: "", review: "" }); // Reset form
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit review.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-background">
        <div className="form-container">
          <h2 className="title_head">Submit Your Review</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={reviewData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={reviewData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="review"
              placeholder="Your Review"
              value={reviewData.review}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Submit Review
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
