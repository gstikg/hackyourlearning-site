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
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {(isVisible)
        && (
          <SessionModal
            event={event} // ala event name
            date={date}
            signup={signup} // signup link
            setIsVisible={setIsVisible}
          >
            { children}
          </SessionModal>
        )}

      <div className="session-card--container">
        <div className="session-image">
          <img
            src={image}
            alt="event visual"
            className="session-img--img"
          />
        </div>
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
          <HYLButton
            color="orange"
            onClick={() => { setIsVisible(true); }}
          >
            More Info
          </HYLButton>
        </div>
      </div>
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
  children: PropTypes.string.isRequired,
  signup: PropTypes.string,
};

export default SessionCard;
