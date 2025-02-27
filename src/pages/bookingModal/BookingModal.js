// BookingModal.js
import React, { useState } from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Book Your Dream Holiday Today!</h2>
        
        {/* Form Fields */}
        <form>
          <label>Name*</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email*</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Holiday Type*</label>
          <select required>
            <option value="">Choose Holiday Type</option>
            <option value="adventure">Adventure</option>
            <option value="beach">Beach</option>
            <option value="cultural">Cultural</option>
          </select>

          <label>Destination*</label>
          <select required>
            <option value="">Choose Destination</option>
            <option value="maasai_mara">Maasai Mara</option>
            <option value="serengeti">Serengeti</option>
            <option value="zanzibar">Zanzibar</option>
          </select>

          <label>No. of Adults*</label>
          <input type="number" placeholder="Enter number of adults" required />

          <label>Kids Above 5yrs*</label>
          <input type="number" placeholder="Enter number of kids above 5 years" required />

          <label>Travel Date*</label>
          <input type="date" required />

          <label>Stay Preference*</label>
          <select required>
            <option value="">Choose Stay Preference</option>
            <option value="luxury">Luxury</option>
            <option value="standard">Standard</option>
            <option value="budget">Budget</option>
          </select>

          <label>Stay Duration*</label>
          <select required>
            <option value="">Choose Stay Duration</option>
            <option value="3_days">3 Days</option>
            <option value="5_days">5 Days</option>
            <option value="7_days">7 Days</option>
          </select>

          <label>Enter Phone Number*</label>
          <input type="tel" placeholder="Enter Contact Number" required />

          {/* Buttons container */}
          <div className="modal-buttons">
            <button type="submit" className="submit-btn">Book Now</button>
            <button type="button" className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
