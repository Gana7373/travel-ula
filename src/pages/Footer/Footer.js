import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Travel Unbounded. All rights reserved.</p>

      {/* Footer Navigation Links */}
      <div className="footer-links">
        <a href="/">Overview</a>
        <a href="/itinerary">Itinerary</a>
        <a href="/costs">Costs</a>
        <a href="/terms">Terms and Conditions</a>
        <a href="/payment">Payment Terms</a>
        <a href="/inclusions-exclusions">Inclusions & Exclusions</a>
      </div>

      {/* Social Media Icons */}
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <p>For inquiries, please email us at: <a href="mailto:info@travelunbounded.com">info@travelunbounded.com</a></p>
        <p>Call us: +1 (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
