// Importing Components from node_modules
import React from 'react';

// Importing Styles
import '../stylesheets/About.scss';

// Importing Static assets
import about from '../assets/about-img.png';
import schulich from '../assets/schulich.png';

const About = () => (
  <div id="about" className="about-info--container">
    <div className="section-break" />

    <div className="about-block about-block--about row alt-bg">
      <div className="col-lg-5 col-md-6 d-none d-md-block img-block img-block--left">
        {/* Images */}
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
          Hack Your Learning is a brand new student-run, not-for-profit initiative born out of a research project. The research project studied the benefits, and impact that Hackathons had towards improving student experiences. It has since evolved into a full-fledged committee of passionate students, and professors working hard to present an annual hackathon and multiple prep sessions that help prepare students in a variety of programming topics.
        </p>
        <p>
          Hack Your Learning strives to challenge students of all skill levels to think critically and presents real-life problems where students can apply their academic knowledge. By encouraging student participation in hackathons, Hack Your Learning hopes to challenge, elevate, and grow students to the next level through out-of-class learning opportunities.
        </p>
      </div>
    </div>

    <div className="about-block row">
      <div className="about-block--text col-lg-5 col-md-6 col-sm-12 col-xs-12">
        <h3>Schulich Engineering</h3>
        <p>
          Through the assistance of the Schulich School of Engineering (SSE) at the University of Calgary, we are able present Hack Your Learning. The SSE is a leader in engineering education and is committed to ensuring digital literacy amongst the engineers of tomorrow. By providing interactive learning experiences inside and outside of the classroom, the SSE is able to provide students with an engaging environment to develop the necessary skills to succeed in industry.
        </p>
      </div>

      {/* Images */}
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
);

export default About;
