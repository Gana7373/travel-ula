import React from 'react';
import './PaymentTerms.css'; // Import the CSS file

const PaymentTerms = () => {
  return (
    <section className="payment-terms-section">
      <h2>Payment Terms and Cancellation Policy</h2>

      {/* Term 1: Full Payment at Booking */}
      <div className="term-card">
        <p><span className="term-icon">💳</span><strong>100% of the tour cost is required at the time of booking.</strong> This secures your reservation and guarantees your spot for the tour.</p>
      </div>

      {/* Term 2: Cancellation Refund Policy */}
      <div className="term-card">
        <p><span className="term-icon">❌</span><strong>50% of the tour cost will be refunded if cancelled 60 days before the travel date.</strong> Refunds will be processed after cancellation confirmation.</p>
      </div>

      {/* Term 3: Cancellation Within 30 Days */}
      <div className="term-card">
        <p><span className="term-icon">⚠️</span><strong>No refund will be issued for cancellations within 30 days of the travel date.</strong> Please ensure you are committed before booking.</p>
      </div>

      {/* Term 4: Payment Options */}
      <div className="term-card">
        <p><span className="term-icon">💵</span><strong>We accept payments via bank transfer, credit card, or mobile payment platforms.</strong> Detailed payment instructions will be provided upon booking confirmation.</p>
      </div>

      {/* Term 5: Payment Deadline */}
      <div className="term-card">
        <p><span className="term-icon">⏳</span><strong>Full payment is due 30 days before the travel date.</strong> Failure to complete the payment will result in cancellation of the reservation.</p>
      </div>
    </section>
  );
};

export default PaymentTerms;
