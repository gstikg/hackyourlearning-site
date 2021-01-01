// Importing Components from node_modules
import React from 'react';

// Importing Project-Defined Components
import SessionCard from '../components/SessionCard';

// Importing Styles
import '../stylesheets/OtherEventsPage.scss';

// Importing Static assets
import github from '../assets/sessions/github.png';
import sec from '../assets/sessions/sec.png';
import logo from '../assets/Light_Logo.png';

const OtherEventsPage = () => (
  <div className="other-events--container">

    {/* The banner image users land on */}
    <div
      className="other-banner"
      style={{
        backgroundColor: 'red',
      }}
    >
      <div className="home-banner--container">
        {/* Content that sits on top of the banner */}
        <div className="home-banner--content-container container">
          <div className="home-banner--text row">
            <div className="col-12 col-lg-8">
              <h1 className="home-banner--title display-2">Hack Your Learning</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="event-cards--container">

      {/* Following contains the content for upcoming events */}
      <div className="upcoming-events--container">
        <h1 className="other-events--title">Upcoming Events</h1>
        <div className="upcoming-events--cards">

          <SessionCard
            event="Winter Prep Session #1"
            date="January 23rd, 2021"
            location="Online"
            image={github}
            signup="http://bitly.ws/aV2u"
          >
            <div className="session-description">
              <p>
                GitHub is a powerful version control tool that can be extremely helpful for teams wanting to collaborate on a project.
            </p>
              <p>
                Did you know that many recruiters and/or interviewers ask for GitHub profiles? A solid GitHub profile can be the first step to impressing them with your skills!
            </p>
              <p>
                <b>Learning Outcomes:</b><br />
              1. Gain hands-on experience working with Git<br />
              2. Engage in a team-working experience<br />
              3. Learn the most important concepts associated with Git
            </p>
            </div>
          </SessionCard>

          <SessionCard
            event="Winter Prep Session #2"
            date="February 20th, 2021"
            location="Online"
            image={logo}
            signup=""
          >
            <div className="session-description">
              <p>
                Time is money, especially in hackathons! Want to learn how to manage the time during hackathon? Then check out these prep session!
            </p>
              <p>
                Developing an app is not all about coding. We aim to teach you how to develop an application from the designing phase to the implementation phase.

            </p>
              <p>
                Most of the sites and applications developed by a perfect team! We also aim to teach you how to work in a team and coordinate with your teammates.
            </p>
              <p>
                <b>Learning Outcomes:</b><br />
              1. Learn how to think as a software engineer <br />
              2. Learn about software development process <br />
              3. Learn how to use agile methodology (scrum) <br />
              4. Gain experience collaborating in a team
            </p>
            </div>
          </SessionCard>

          <SessionCard
            className="one-line"
            event="HYL Hackathon"
            date="March 27th, 2021"
            location="Online"
            image={logo}
            signup=""
          />

        </div>
      </div>

      {/* Following contains the content for past events */}
      <div className="past-events--container">
        <h1 className="other-events--title">Past Events</h1>
        <div className="past-events--cards">
          <SessionCard
            event="SEC: Programming Division"
            date="November 7th, 2020"
            location="Online"
            image={sec}
            signup=""
          >
            <div className="session-description">
              <p style={{textAlign: 'justify'}}>
                The Schulich Engineering Competition (SEC) is an annual event hosted at the University of Calgary. The event gives students the opportunity for some hands-on learning. The goal of this event is to enhance the knowledge of students by fostering their growth in a competitive environment. This event also serves as a qualifier for the Western Engineering Competition (WEC) and the Canadian Engineering Competition (CEC).
              </p>
              <p style={{textAlign: 'justify'}}>
                This Programming Division challenges competitors to produce a piece of industry-quality software with all of the proper user and administrative documents. The teams will use their software development skills, their technical writing abilities, and their project management skills to design a solution to a proposed problem. This division is broken into two categories: Senior programming and Junior programming. This is an attempt to give less experienced competitors a more fair and enjoyable competition experience.
              </p>
            </div>
          </SessionCard>
          <SessionCard
            event="Fall Prep Session #1"
            date="October 17th, 2020"
            location="Online"
            image={logo}
            signup=""
          />
        </div>
      </div>
    </div>
  </div>
);

export default OtherEventsPage;
