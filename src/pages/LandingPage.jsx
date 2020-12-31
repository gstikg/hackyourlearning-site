// Importing Components from node_modules
import React from 'react';

// Importing Project-Defined Components
import HYLButton from '../components/HYLButton';

// Importing Styles
import '../stylesheets/LandingPage.scss';

// Importing Static Assets
import logo from '../assets/Light_Logo_Text.png';

const LandingPage = () => (
  <div className="landing-container">

    {/* Following content is for the landing image & buttons */}
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
          <HYLButton color="blue">
            Become a Hacker
          </ HYLButton>
          <HYLButton color="pink">
            Become a Mentor
          </ HYLButton>
        </div>

        <h5 className="event-info--date">March 27, 2021 • Virtual Event</h5>

        {/* Counter Section */}
        <div className="event-info--countdown">
          <div className="row">
            <div className="counter-item col-12 col-sm-3">
              <p className="counter-item--value">30</p>
              <p className="counter-item--title">Days</p>
            </div>

            <div className="counter-item col-12 col-sm-3">
              <p className="counter-item--value">14</p>
              <p className="counter-item--title">Hours</p>
            </div>

            <div className="counter-item col-12 col-sm-3">
              <p className="counter-item--value">53</p>
              <p className="counter-item--title">Minutes</p>
            </div>

            <div className="counter-item col-12 col-sm-3">
              <p className="counter-item--value">21</p>
              <p className="counter-item--title">Seconds</p>
            </div>
          </div>
        </div>
      </div>
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
