// Importing Components from node_modules
import React from 'react';

// Importing Project-Defined Components
import LandingBanner from '../components/LandingBanner';
import About from '../components/About';

// Importing Styles
import '../stylesheets/LandingPage.scss';

const LandingPage = () => (
  <div className="landing-container">
    {/* Following component is for the page's banner */}
    <LandingBanner />

    {/* Following content is for the About section */}
    <About />

    {/* Following content is for the Schedule section */}

    <div className="landing-schedule--container">
      <div className="section-break" />
      <h3>Schedule</h3>
      <p>
        The Hack Your Learning schedule is currenty
        {' '}
        <b>unavailable</b>
        .
        <br />
        Please check back at a later date.
      </p>
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
