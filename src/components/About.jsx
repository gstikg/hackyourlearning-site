// Importing Components from node_modules
import React from 'react';

// Importing Styles
import '../stylesheets/About.scss';

// Importing Static assets
import about from '../assets/about-img.png';
import schulich from '../assets/schulich.png';

const About = () => (
  <>
    <div className="about-info--container">
      <div className="section-break" />

      <div className="about-block about-block--about row alt-bg">
        <div className="col-lg-5 col-md-6 d-none d-md-block img-block img-block--left">
          <img
            src={about}
            alt="about filler"
            style={{
              maxWidth: '515px',
              width: '100%',
            }}
          />
        </div>
        <div className="about-block--text about col-lg-5 col-md-6 col-sm-12 col-xs-12">
          <h3>About</h3>
          <p>
            Hack Your Learning is a brand new student-run, non for profit hackathon.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="about-block row">
        <div className="about-block--text col-lg-5 col-md-6 col-sm-12 col-xs-12">
          <h3>Schulich Engineering</h3>
          <p>
            Through the assistance of the Schulich School of Engineering at the University of
            Calgary, we are able present Hack Your Learning, a place to expand on your
            skillset in a creative and diverse environment.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-lg-5 col-md-6 d-none d-md-block img-block img-block--right">
          <img
            src={schulich}
            alt="schulich school of engineering"
            style={{
              maxWidth: '515px',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  </>
);

export default About;
