import React from 'react';
import '../stylesheets/LandingPage.scss';
import Logo from '../assets/Light_Logo.png';
import LogoText from '../assets/Light_Logo_Text.png';
import HYLButton from '../components/HYLButton.jsx';


const LandingPage = () => (
  <>
    {/* Replace this div with actual navbar */}
    <div className="tempNavBar">
        This is where Nav Bar will go!
    </div>

    <div className="mainBody">
      <img src={LogoText} className ="logoText" />
      <div className="eventDetails">
        <div className="registerButtons">
          <HYLButton text="Become a Hacker" color="blue" />
          <HYLButton text="Become a Mentor" color="red"/>
        </div>
        <a className="date">March 27, 2021 • Virtual event</a>
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
        {/* <div>30   14    53      21</div>
        <div>Days Hours Minutes Seconds</div> */}

      </div>
    </div>
  </>
);

export default LandingPage;
