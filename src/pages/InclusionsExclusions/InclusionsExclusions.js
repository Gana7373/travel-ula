import React from 'react';
import './InclusionsExclusions.css'; // Import the CSS file

const InclusionsExclusions = () => {
  return (
    <section className="inclusions-exclusions-section">
      <h2>Inclusions and Exclusions</h2>

      <h3>Inclusions</h3>
      <div className="card-item">
        <ul>
          <li>Internal transfers from JKIA airport to Maasai Mara</li>
          <li>Stay at Maasai Mara</li>
          <li>Game drives in Landcruisers</li>
          {/* Add more inclusions */}
        </ul>
      </div>

      <h3>Exclusions</h3>
      <div className="card-item">
        <ul>
          <li className="exclusion">Airfare or VISA charges</li>
          <li className="exclusion">Personal and medical expenses</li>
          <li className="exclusion">Tips and gratuities</li>
          {/* Add more exclusions */}
        </ul>
      </div>
    </section>
  );
};

export default InclusionsExclusions;
