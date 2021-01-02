// Importing Components from node_modules
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

// Importing Project-Defined Components
import HYLButton from './HYLButton';

// Importing Styles
import '../stylesheets/SessionModal.scss';

const SessionModal = ({
  event, // ala event name
  date,
  signup, // signup link
  show,
  handleClose,
  children, // aka description
}) => {
  // Conditionally render specific buttons, if any, based on the input passed in {signup}
  let button;

  if (signup === '') {
    button = null;
  } else if (signup === 'Coming Soon') {
    // For upcoming events with an existing sign up form
    button = (
      <Modal.Footer>
        <HYLButton
          color="green--disabled"
          width="205"
        >
          Sign Up Coming Soon
        </HYLButton>
      </Modal.Footer>
    );
  } else {
    // If the event is upcoming but no sign up form exists
    button = (
      <Modal.Footer>
        <HYLButton
          color="green"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              `${signup}`,
              '_blank'
            )
          }}
        >
          Sign Up
        </HYLButton>
      </Modal.Footer>

    );
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />

      <h2 className="session-info--event-name">
        {event}
      </h2>

      <h4 className="session-info--date">
        {date}
      </h4>

      {/* Event Description */}
      <Modal.Body>
        {children}
      </Modal.Body>

      {button}
    </Modal>
  );
};

// Prop Validation
SessionModal.propTypes = {
  event: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  signup: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SessionModal;
