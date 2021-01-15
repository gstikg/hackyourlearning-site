import React from 'react';
import schulich from '../assets/schulich.png'; // Import schulich logo
import HSBC from '../assets/HSBC.png';
import zoo from '../assets/zoo.png';
import '../stylesheets/Sponsor.scss';

const Sponsor = () => (
  <>
    <div className="center text">
      <h2><b>Meet Our Sponsors</b></h2>
    </div>

    <div className="about-block--text center">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>

      <p className="brtext">
        Interested in sponsoring? Want more information? Email us at
        {' '}
        <b>
          sponsor@hackyourlearning.ca
        </b>
      </p>
    </div>

    <div className="button_position">
      <button type="button" className="sponsor_button"><b>Sponsor the Impact</b></button>
    </div>

    <div className="center text">
      <h3><b>Our Sponsors</b></h3>
    </div>

    <div className="zoom center">
      <a href="https://www.hsbc.ca/" target="_blank" rel="noopener noreferrer">
        <img src={HSBC} alt="Schulich logo" width="300" height="200" />
      </a>
    </div>

    <div className="center text">
      <h3><b>Our Partners</b></h3>
    </div>

    <div className="center">
      <div className="zoom imgContainer">
        <a href="https://schulich.ucalgary.ca/" target="_blank" rel="noopener noreferrer">
          <img src={schulich} alt="Schulich logo" width="280" height="240" />
        </a>
      </div>

      <div className="zoom imgContainer">
        <a href="https://www.facebook.com/zooengg/" target="_blank" rel="noopener noreferrer">
          <img src={zoo} alt="Schulich logo" width="280" height="240" />
        </a>
      </div>
    </div>

  </>
);

export default Sponsor;
