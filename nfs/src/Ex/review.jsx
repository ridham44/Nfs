import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Review = () => {
  const [isHovered, setIsHovered] = useState(false);
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
      <div className="form-background">
        <div className="form-container">
          <h2 className="title_head">Submit Your Review</h2>
          <form onSubmit={handleSubmit}>
            <input
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={reviewData.name}
              onChange={handleChange}
              required
            />
            <input
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={reviewData.email}
              onChange={handleChange}
              required
            />
            <textarea
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              name="review"
              placeholder="Your Review"
              value={reviewData.review}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="submit-btn"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: isHovered ? "#218838" : "#28a745", // Change colors on hover
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s", // Smooth transition
              }}
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
