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
    <div className="other-banner">
      <div className="other-events--banner-container">
        {/* Content that sits on top of the banner */}
        <div className="other-events--content-container container">
          <div className="other-events--text">
            <h1 className="other-events--banner-title">
              <b>
                Hack Your Learning Events:
              </b>
              <br />
              2020-2021 Season
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div className="event-cards--container">

      {/* Following contains the content for upcoming events */}
      <div id="upcoming" className="upcoming-events--container">
        <h1 className="other-events--title">Upcoming Events</h1>
        <div className="upcoming-events--cards">

          <SessionCard
            className="one-line"
            event="HYL Hackathon"
            date="March 27th, 2021"
            location="Online"
            image={logo}
            signup="Coming Soon"
          >
            <div className="session-description">
              <p>
                It&#39;s time for the real thing! On March 27th, we will be having our first every
                Hack Your Learning hackathon!
              </p>
              <p>
                Put your creativity and skills to the test in the high-paced environment, where
                you&#39;ll be competing along side many others to win prizes. But do not fret! This
                is still a learning opportunity, practice coding, gain connections, and most
                importantly, have fun!
              </p>
              <p>
                If you find yourself, and your team, struggling at any point. Don&#39;t worry,
                mentors will be on call to help work you through any significant issues you may
                have.
              </p>
              <p className="tip">
                <i>
                  “A person becomes a star within the limits.”
                  <br />
                </i>
                Probably the most imposing characteristic of a hackathon is the time limit. So be
                ready to turn this threat into an opportunity and learn as much as you can in just
                a day!
              </p>
            </div>

          </SessionCard>

        </div>
      </div>

      {/* Following contains the content for past events */}
      <div id="past" className="past-events--container">
        <h1 className="other-events--title">Past Events</h1>
        <div className="past-events--cards">


        <SessionCard
            event="Winter Prep Session #2"
            date="February 20th, 2021"
            location="Online"
            image={logo}
            signup=""
          >
            <div className="session-description">
              <p>
                Time is money, especially in hackathons! So if you&#39;re wanting to learn how to
                effectively manage your time during that hackathon time-crunch, then check out this
                prep session!
              </p>
              <p>
                What better way to work effectively than to integrate an agile methodology into
                your workflow. This session will show you one method in which you can develop an
                application starting all the way from the design phase to the implementation phase.
                Not only that, you&#39;ll get experience playing at people&#39;s strength and how to
                communicate with them to create that &#34;perfect&#34; team.
              </p>
              <p>
                <b>Learning Outcomes:</b>
                <br />
                1. Practice thinking as a Software Engineer
                <br />
                2. Learn about the Software Development Process and gain experience in using the
                Agile methodology that is Scrum
                <br />
                3. Engage in a team-based environment
              </p>
            </div>
          </SessionCard>

          {/* Session Card for GitHub Prep Session */}
          <SessionCard
            event="Winter Prep Session #1"
            date="January 23rd, 2021"
            location="Online"
            image={github}
            signup=""
          >
            <div className="session-description">
              <p>
                Git is a powerful version control tool that can be extremely helpful for teams
                wanting to collaborate on a project. It&#39;s a tool you will often see used in
                industry, so if you have yet to interact with Git before, now is the perfect
                opportunity!
              </p>
              <p>
                <b>Learning Outcomes:</b>
                <br />
                1. Gain hands-on experience working with Git, with mentors ready to help you
                troubleshoot
                <br />
                2. Learn important concepts associated with Git
                <br />
                3. Engage in a team-based environment
              </p>
              <p className="tip">
                <i>
                  Did you know that many recruiters and/or interviewers ask for GitHub profiles? A
                  solid GitHub profile can be the first step to impressing them with your skills!
                </i>
              </p>
            </div>
          </SessionCard>

          {/* Session Card for SEC */}
          <SessionCard
            event="SEC: Programming Division"
            date="November 7th, 2020"
            location="Online"
            image={sec}
            signup=""
          >
            <div className="session-description">
              <p style={{ textAlign: 'justify' }}>
                The Schulich Engineering Competition (SEC) is an annual event hosted at the
                University of Calgary. The event gives students the opportunity for some hands-on
                learning. The goal of this event is to enhance the knowledge of students by
                fostering their growth in a competitive environment. This event also serves as a
                qualifier for the Western Engineering Competition (WEC) and the Canadian
                Engineering Competition (CEC).
              </p>
              <p style={{ textAlign: 'justify' }}>
                This Programming Division challenges competitors to produce a piece of
                industry-quality software with all of the proper user and administrative documents.
                The teams will use their software development skills, their technical writing
                abilities, and their project management skills to design a solution to a proposed
                problem. This division is broken into two categories: Senior programming and Junior
                programming. This is an attempt to give less experienced competitors a more fair
                and enjoyable competition experience.
              </p>
            </div>
          </SessionCard>

          {/* Session Card for our first ever prep session */}
          <SessionCard
            event="Fall Prep Session #1"
            date="October 17th, 2020"
            location="Online"
            image={logo}
            signup=""
          >
            <div className="session-description">
              <p>
                Our first ever Hack Your Learning Prep Session! We&#39;ll be learning alongside you
                as we delve into the topic of Hackathons and prepare a mock problemset. Experience
                what it&#39;s like to participate in a hackathon, without the major stress
                associated with it. Plenty of mentors are available at your beck and call to assist
                you in any troubleshooting issues
              </p>
              <p>
                <b>Learning Outcomes:</b>
                <br />
                1. Learn how hackathons are run
                {' '}
                <br />
                2. Practice your coding skills in a supportive environment
                {' '}
                <br />
                3. Engage in a team-based environment
              </p>
            </div>
          </SessionCard>
        </div>
      </div>
    </div>
  </div>
);

export default OtherEventsPage;
