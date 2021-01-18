// Importing Components from node_modules
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Importing Project-Defined Components
import LandingBanner from '../components/LandingBanner';
import About from '../components/About';
import Footer from '../components/Footer';
import Sponsor from '../components/Sponsor';
// Importing Styles
import '../stylesheets/LandingPage.scss';

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    let elementFound = document.getElementById(location.hash);

    if (elementFound) {
      elementFound.scrollIntoView({ behavior: "smooth" });

    }
  }, [location])

  return (
    <div className="landing-container">
      {/* Following component is for the page's banner */}
      <LandingBanner />

      {/* Following content is for the About section */}
      <About />

      {/* Following content is for the Schedule section */}
      <div id="schedule" className="landing-schedule--container">
        <div className="section-break" />
        <h3>Schedule</h3>
        <p>
          The Hack Your Learning schedule is currently
          {' '}
          <b>unavailable</b>
          .
          <br />
          Please check back at a later date.
        </p>
      </div>

      {/* Following content is for the Sponsors section */}
      <div className="landing-sponsors--container">
        <Sponsor />
      </div>

      {/* Following content is for the FAQ section */}
      <div className="landing-FAQ--container">
        FAQ
      </div>

      {/* Following content is for the Footer section */}
      <Footer />
    </div>
  );
}

  export default LandingPage;
