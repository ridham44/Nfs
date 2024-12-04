import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "../App.css";
const SubscribeForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [bank, setBank] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend without storing card details
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          cardNumber,
          cvv,
          expiryDate,
          bank,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Success: Show success message and redirect to home after 2 seconds
        alert(result.message);
        setTimeout(() => {
          navigate("/"); // Redirect to home page
        }, 2000); // 2 seconds delay for the user to see the message
      } else {
        // If there is an error, display the error message
        setError(result.message || "Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        "An error occurred while processing your subscription. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="form-background">
        <div className="form-container">
          <form className="subscription-form" onSubmit={handleSubmit}>
            <h2 className="title_head">Subscribe to NFS Club</h2>
            <h6 className="title_head">
              Unlock exclusive access to the ultimate community for car
              enthusiasts. For just $50 per year, you’ll gain access to a world
              of benefits that will fuel your passion for cars.
            </h6>
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Display error message if any */}
            <input
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Credit Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={16}
              required
            />
            <br />
            <input
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength={3}
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
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
            <select
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              required
            >
              <option value="">Select Your Bank</option>
              <option value="Chase">JPMorgan Chase</option>
              <option value="Bank of America">Bank of America</option>
              <option value="Wells Fargo">Wells Fargo</option>
              <option value="Goldman Sachs">Goldman Sachs</option>
              <option value="Bank Of Montreal">Bank Of Montreal</option>
            </select>
            <br />
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
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
