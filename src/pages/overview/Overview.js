import React from 'react';
import './Overview.css'; // Import the CSS file

const Overview = () => {
  return (
    <section className="overview-section">
      <img src="/assets/overview.jpg" alt="Maasai Mara Landscape" className="overview-image" />
      <h2>Overview</h2>
      <p>
        November is one of the best times to visit Kenya, especially to visit its prime park, Maasai Mara. This is the season when the large migratory herds have returned to Tanzania, and now the Big Cats venture long distances to hunt their prey. The plains of Maasai Mara are lush green, with dramatic skies, and the sunrise and sunsets are simply breathtaking.
      </p>
      <p>
        Join us on this unforgettable journey of your lifetime, created for affordable costs without compromising on any services. This is the perfect opportunity to witness the wild beauty of Maasai Mara during one of its most enchanting seasons.
      </p>
      <p className="quote">
        "Discover the magic of Maasai Mara, where nature and adventure await at every corner."
      </p>
    </section>
  );
};

export default Overview;
