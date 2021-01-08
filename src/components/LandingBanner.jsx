// Importing Components from node_modules
import React from 'react';

// Importing Project-Defined Components
import HYLButton from './HYLButton';
import LandingCountdown from './LandingCountdown';

// Importing Styles
import '../stylesheets/LandingBanner.scss';

// Importing Static Assets
import logo from '../assets/Light_Logo_Text.png';

const LandingBanner = () => (
  <div className="landing-banner--container">

    <div className="landing-banner--logo-container">
      <img
        src={logo}
        alt="organizations logo"
        className="landing-banner--logo"
      />
    </div>
    <div className="event-info--container">
      {/* Buttons to register as attendee or volunteer */}
      <div className="button-group--register">
        <HYLButton
          color="blue"
          width="175"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'https://forms.gle/R2tgjp2fDUzZNt9z9',
              '_blank',
            );
          }}
        >
          Become a Hacker
        </HYLButton>
        <HYLButton
          color="pink"
          width="175"
          // Will open the link on the new page when clicked
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'https://forms.gle/MJdTzDtxkyP4xQg29',
              '_blank',
            );
          }}
        >
          Become a Mentor
        </HYLButton>
      </div>

      <h5 className="event-info--date">March 27, 2021 • Virtual Event</h5>

      {/* Counter Section */}
      <LandingCountdown />

    </div>
  </div>
);

export default LandingBanner;
