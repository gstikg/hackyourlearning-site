// Importing Components from node_modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Importing Project-Defined Components
import HYLButton from './HYLButton';
import SessionModal from './SessionModal';

// Importing Styles
import '../stylesheets/SessionCard.scss';

const SessionCard = ({
  className,
  event, // ala event name
  date,
  location,
  image,
  children, // aka description
  signup, // signup link
}) => {
  // Defining state to help render the sidebar element on toggle
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="session-card--container">

        {/* Image associated with the session */}
        <div className="session-image">
          <img
            src={image}
            alt="event visual"
            className="session-img--img"
          />
        </div>

        {/* Basic session information */}
        <div className="session-info">
          <h6 className="session-info--event-name">
            {event}
          </h6>
          <p className="session-info--date">
            {date}
          </p>
          <p className={`session-info--location ${className}`}>
            {location}
          </p>

          {/* Button to reveal modal with more information about session */}
          <HYLButton
            color="orange"
            onClick={handleShow}
          >
            More Info
          </HYLButton>
        </div>
      </div>

      <SessionModal
        event={event} // ala event name
        date={date}
        signup={signup} // signup link
        show={show}
        handleClose={handleClose}
      >
        {children}
      </SessionModal>
    </>
  );
};

// Default prop declaration
SessionCard.defaultProps = {
  className: '',
  signup: '',
};

// Prop Validation
SessionCard.propTypes = {
  className: PropTypes.string,
  event: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.object()).isRequired,
  signup: PropTypes.string,
};

export default SessionCard;
