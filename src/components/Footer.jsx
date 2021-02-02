// Importing Components from node_modules
import React from 'react';

// Importing Styles
import '../stylesheets/Footer.scss';

// Importing Static Assets
import {
  AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail,
} from 'react-icons/ai';
import logo from '../assets/Light_Logo_Text.png';
import codeOfConduct from '../assets/HYL_code_of_conduct.pdf';

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="row footer-upper">

        <div className="footer-upper-left">

          <div className="footer-about">
            <img
              src={logo}
              alt="organization logo"
              style={{
                maxWidth: '200px',
                width: '100%',
              }}
            />
          </div>

          {/* Contains site links */}
          <div className="footer-site-links">
            {/* <div className="footer-site-links-wrapper"> */}
            <div className="footer-hack-info">

              {/* <div className="footer-hack-info-wrapper"> */}
              <h3 className="footer-title">Hackathon Info</h3>

              <div className="footer-site-links-text">
                <a
                  href="https://forms.gle/R2tgjp2fDUzZNt9z9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign Up to Participate
                </a>
              </div>
              <div className="footer-site-links-text">
                <a href="/#about">
                  About
                </a>
              </div>
              <div className="footer-site-links-text">
                <a href="/#schedule">
                  Schedule
                </a>
              </div>
              <div className="footer-site-links-text">
                <a href="/#sponsors">
                  Our Sponsors
                </a>
              </div>
              <div className="footer-site-links-text">
                <a href="/#faq">
                  FAQ
                </a>
              </div>
              {/* </div> */}
            </div>

            <div className="footer-other-events">
              {/* <div className="footer-other-events-wrapper"> */}
              <h3 className="footer-title">Other Events</h3>
              <div className="footer-site-links-text">
                <a href="/other-events">
                  Other Events
                </a>
              </div>
              <div className="footer-site-links-text">
                <a href="/other-events/#upcoming">
                  Upcoming Events
                </a>
              </div>
              <div className="footer-site-links-text">
                <a href="/other-events/#past">
                  Past Events
                </a>
              </div>
              {/* </div> */}
            </div>
            {/* </div> */}
          </div>

        </div>

        {/* Following content is for the social media links */}
        <div className="footer-contact-info">
          {/* <div className="footer-social-wrapper"> */}
          <div className="footer-social-title">
            <h3 className="footer-title">Get In Touch</h3>
          </div>
          <div className="footer-social-icons">
            <AiOutlineInstagram
              height="45px"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  'https://www.instagram.com/uofc_hyl/',
                  '_blank',
                );
              }}
            />
            <AiOutlineFacebook
              height="45px"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  'https://www.facebook.com/Hack-Your-Learning-104061298155807',
                  '_blank',
                );
              }}
            />
            <AiOutlineLinkedin
              height="45px"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  'https://www.linkedin.com/company/hack-your-learning',
                  '_blank',
                );
              }}
            />
            <AiOutlineMail
              height="45px"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  'mailto:hello@hackyourlearning.ca',
                );
              }}
            />
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* Horizontal rule */}
      <hr />

      {/* Contains the sub footer contain */}
      <div className="row sub-footer--container">
        <div className="footer-copyright">
          <p>
            2020 &#169; Hack Your Learning | Made with &#9829; in Calgary
          </p>
        </div>

        <div className="footer-conduct">
          <a href={codeOfConduct} target="_blank" rel="noopener noreferrer">Code of Conduct</a>
        </div>
      </div>

    </div>
  </>
);

export default Footer;
