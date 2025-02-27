import React from 'react';
import './Costs.css'; // Import the new CSS file

const Costs = () => {
  return (
    <section className="costs-section">
      <h2>Costs</h2>
      
      {/* Cost Details */}
      <div className="cost-details">
        <p>Cost per adult, Ex Nairobi: <strong>USD 1582</strong> (incl of local taxes)</p>
        <p>Cost per child (4 to 9 years), Ex Nairobi: <strong>USD 1400</strong> (incl of taxes)</p>
      </div>

      {/* Special Offer Section */}
      <div className="offer">
        <h3>Special Independence Day Offer:</h3>
        <p>Cost per adult: <strong>USD 1322</strong> (For bookings made on or before August 14th, 2023)</p>
        <p>Cost per child: <strong>USD 1127</strong> (For bookings made on or before August 14th, 2023)</p>
      </div>
    </section>
  );
};

export default Costs;
