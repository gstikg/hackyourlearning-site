import React from 'react';
import schulich from '../assets/schulich.png'; // Import schulich logo
import HSBC from '../assets/HSBC.png';
import zoo from '../assets/zoo.png';
import '../stylesheets/Sponsor.scss';
import HYLButton from './HYLButton';

const Sponsor = () => (
  <>
    <div id="sponsors" className="sponsor-info--container">
      <div className="section-break" />

      <h3>Meet Our Sponsors</h3>

      <div className="sponsor-text">
        <p>
          It is with the help of our sponsors that we can create the environment that allows
          emerging emerging developers, and designers to bring their ideas to life.
        </p>

        <div className="sponsor-text--contact">
          <p>
            Interested in sponsoring? Want more information?
          </p>
          <p className="sponsor-text--email">
            Email us at
            {' '}
            <a href="mailto:sponsor@hackyourlearning.ca"><b>sponsor@hackyourlearning.ca</b></a>
          </p>
        </div>
      </div>

      <div className="sponsor--button">
        <HYLButton
          color="blue"
          width="200"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'mailto:sponsor@hackyourlearning.ca',
            );
          }}
        >
          Sponsor the Impact
        </HYLButton>
      </div>

      <div className="sponsor--sponsor-info">
        <h4>Our Sponsors</h4>

        <div className="sponsor--sponsor-pics">
          <a
            href="https://www.hsbc.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HSBC}
              alt="HSBC logo"
              height="125"
            />
          </a>
        </div>
      </div>

      <div className="sponsor--partners-info">
        <h4>Our Partners</h4>

        <div className="sponsor--partner-pics">
          <a
            className="partner-icons"
            href="https://schulich.ucalgary.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={schulich}
              alt="schulich logo"
              height="125"
            />
          </a>

          <a
            className="partner-icons"
            href="https://www.facebook.com/zooengg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={zoo}
              alt="zoo logo"
              height="125"
            />
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Sponsor;
