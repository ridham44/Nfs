import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const teams = [
    { id: 1, name: 'Mercedes' },
    { id: 2, name: 'Red Bull Racing' },
    { id: 3, name: 'Ferrari' },
    { id: 4, name: 'McLaren' },
    { id: 5, name: 'Alpine' },
    { id: 6, name: 'Aston Martin' },
    { id: 7, name: 'Alfa Romeo' },
    { id: 8, name: 'Haas' },
    { id: 9, name: 'Williams' },
    { id: 10, name: 'Porsche' },
    { id: 11, name: 'Sauber' },
    { id: 12, name: 'Audi' },
    { id: 13, name: 'Cadillac' },
];

const Review = () => {
    const [selectedTeam, setSelectedTeam] = useState('');
    const [review, setReview] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (!loggedInUser) {
            navigate('/login');
        } else {
            const userData = JSON.parse(loggedInUser);
            console.log('User Data:', userData); // Check if username exists here
            setUser(userData); // Set the parsed user object directly
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Check if the user has already submitted a review for the selected team
            const response = await axios.get(`http://localhost:5000/api/f1review?email=${user.email}&team=${selectedTeam}`);
            if (response.data.exists) {
                alert('You have already submitted a review for this team.');
                return;
            }
            console.log('Submitting review with name:', user.name); // Change this to user.name
            // Submit the review
            await axios.post('http://localhost:5000/api/f1review', {
                username: user.name, // Change this to user.name
                email: user.email,
                review,
                team: selectedTeam,
            });
            alert('Review submitted successfully!');
            setReview('');
            setSelectedTeam('');
            navigate('/');
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit the review');
        }
    };

    return (
        <div>
            <div className="form-container">
                <h1>Submit Your F1 Team Review</h1>
                <form onSubmit={handleSubmit}>
                    <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)} required>
                        <option value="" disabled>
                            Select an F1 Team
                        </option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.name}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                    <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Write your review here..." required />
                    <button class="button" type="submit">
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Review;
