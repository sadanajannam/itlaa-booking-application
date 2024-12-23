import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingHistory = () => {
  // State to hold booking history
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch ride history when component mounts
  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rides'); // Assuming API is at this endpoint
        setHistory(response.data); // Assuming the API returns the booking history
      } catch (err) {
        setError('Failed to load booking history');
      } finally {
        setLoading(false);
      }
    };

    fetchBookingHistory();
  }, []);

  // Render Loading and Error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Your Booking History</h1>
      {history.length === 0 ? (
        <p>You have no booking history.</p>
      ) : (
        <ul>
          {history.map((ride, index) => (
            <li key={index}>
              <strong>Pickup:</strong> {ride.pickupLocation} <br />
              <strong>Drop:</strong> {ride.dropLocation} <br />
              <strong>Status:</strong> {ride.status} <br />
              <strong>Date:</strong> {new Date(ride.date).toLocaleDateString()} <br />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
