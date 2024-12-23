import React, { useState } from 'react';
import axios from 'axios';

const RideBooking = () => {
  const [rideDetails, setRideDetails] = useState({
    pickupLocation: '',
    dropLocation: '',
    cabType: 'economy',
    scheduleTime: '',
  });

  const handleChange = (e) => {
    setRideDetails({ ...rideDetails, [e.target.name]: e.target.value });
  };

  const handleBookRide = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/rides/book', rideDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Ride booked successfully');
    } catch (err) {
      console.error(err.response?.data?.message || 'Error booking ride');
    }
  };
  

  return (
    <div>
      <h2>Book a Ride</h2>
      <form onSubmit={handleBookRide}>
        <input
          type="text"
          name="pickupLocation"
          value={rideDetails.pickupLocation}
          onChange={handleChange}
          placeholder="Pickup Location"
          required
        />
        <input
          type="text"
          name="dropLocation"
          value={rideDetails.dropLocation}
          onChange={handleChange}
          placeholder="Drop Location"
          required
        />
        <select name="cabType" value={rideDetails.cabType} onChange={handleChange}>
          <option value="economy">Economy</option>
          <option value="premium">Premium</option>
          <option value="shared">Shared</option>
        </select>
        <input
          type="datetime-local"
          name="scheduleTime"
          value={rideDetails.scheduleTime}
          onChange={handleChange}
        />
        <button type="submit">Book Ride</button>
      </form>
    </div>
  );
};

export default RideBooking;
