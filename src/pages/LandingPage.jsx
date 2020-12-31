// Importing Components from node_modules
import React from 'react';

// Importing Project-Defined Components
import HYLButton from '../components/HYLButton';

// Importing Styles
import '../stylesheets/LandingPage.scss';

// Importing Static Assets
import Logo from '../assets/Light_Logo_Text.png';

const LandingPage = () => (
  <>
    <div className="mainBody">
      <img src={Logo} alt="organizations logo" className="logoText" />
      <div className="eventDetails">
        <div className="registerButtons">
          <HYLButton color="blue"> Become a Hacker</HYLButton>
          <HYLButton color="pink">Become a Mentor</HYLButton>
        </div>
        <h5 className="date">March 27, 2021 • Virtual event</h5>
        <div className="countdown">
          <div>
            <div className="countdown__number">30</div>
            <div className="countdown__text">Days</div>
          </div>
          <div>
            <div className="countdown__number">14</div>
            <div className="countdown__text">Hours</div>
          </div>
          <div>
            <div className="countdown__number">53</div>
            <div className="countdown__text">Minutes</div>
          </div>
          <div>
            <div className="countdown__number">21</div>
            <div className="countdown__text">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default LandingPage;
