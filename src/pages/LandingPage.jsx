// Importing Components from node_modules
import React from 'react';

// Importing Styles
import '../stylesheets/LandingPage.scss';

const LandingPage = () => (
  <div className="landing-container">
    <div className="landing-banner--container">
      Banner
    </div>

    {/* Following content is for the About section */}
    <div className="landing-about--container">
      About
    </div>

    {/* Following content is for the Schedule section */}
    <div className="landing-schedule--container">
      Schedule
    </div>

    {/* Following content is for the Sponsors section */}
    <div className="landing-sponsors--container">
      Sponsors
    </div>

    {/* Following content is for the FAQ section */}
    <div className="landing-FAQ--container">
      FAQ
    </div>

  </div>
);

export default LandingPage;
