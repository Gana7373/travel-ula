import React from 'react';
import './Itinerary.css'; // Import the CSS file for styling

const Itinerary = () => {
  return (
    <section className="itinerary-section">
      <h2>Itinerary</h2>
      
      {/* Day 1 */}
      <div className="itinerary-day">
        <h3>Day 1 - Nov 14th, 2023</h3>
        <p>
          Our drivers would pick you up from JKIA airport at 7AM. The road journey takes about 5 to 6 hours, passing through beautiful landscapes. First, we’ll stop at Nairobi National Park where you can catch a glimpse of rhinos and other wildlife. Then, we’ll drive through the Great Rift Valley, where the views are truly breathtaking.
        </p>
      </div>

      {/* Day 2 */}
      <div className="itinerary-day">
        <h3>Day 2 - Nov 15th, 2023</h3>
        <p>
          Wake up early and experience the morning game drive with a bush breakfast while spotting lions, cheetahs, zebras, and other iconic wildlife. The sunrise at Maasai Mara is something you’ll never forget, and the serenity of the Mara in the early morning is magical.
        </p>
      </div>

      {/* Day 3 */}
      <div className="itinerary-day">
        <h3>Day 3 - Nov 16th, 2023</h3>
        <p>
          A full-day game drive with packed breakfast and lunch near Sand River, which marks the border between Maasai Mara and Tanzania. This is where the Great Migration happens, and you may be lucky enough to witness some of the wildlife crossings.
        </p>
      </div>

      {/* Day 4 */}
      <div className="itinerary-day">
        <h3>Day 4 - Nov 17th, 2023</h3>
        <p>
          Enjoy a leisurely breakfast and discuss your experiences with the group. Afterward, you’ll embark on your return journey to Nairobi. You'll be dropped off at JKIA airport, bringing an end to this unforgettable adventure.
        </p>
      </div>
    </section>
  );
};

export default Itinerary;
