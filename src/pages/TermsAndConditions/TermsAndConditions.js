import React from 'react';
import './TermsAndConditions.css'; // Import the CSS

const TermsAndConditions = () => {
  return (
    <section className="terms-section">
      <h2>Terms and Conditions</h2>

      {/* Term 1 */}
      <div className="term-card">
        <p><span className="term-icon">📅</span> Costs are based at 4 paxs per vehicle for game drives. Additional costs may apply for extra passengers.</p>
      </div>

      {/* Term 2 */}
      <div className="term-card">
        <p><span className="term-icon">🛂</span> Guests traveling should process valid passports with a minimum of 6 months validity from the date of travel.</p>
      </div>

      {/* Add other terms */}
      <div className="term-card">
        <p><span className="term-icon">🧳</span> Luggage should not exceed 15kg per person. Oversized luggage will incur additional fees.</p>
      </div>

      <div className="term-card">
        <p><span className="term-icon">🏨</span> Accommodation is based on shared twin rooms. Single room supplements are available upon request.</p>
      </div>

      <div className="term-card">
        <p><span className="term-icon">⚠️</span> Cancellations made less than 30 days prior to the tour will incur a 50% cancellation fee.</p>
      </div>

      {/* Add more terms as needed */}
    </section>
  );
};

export default TermsAndConditions;
