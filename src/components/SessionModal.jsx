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
}) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton />
    <h2 className="session-info--event-name">
      {event}
    </h2>

    <h4 className="session-info--date">
      {date}
    </h4>

    <Modal.Body>
      {children}
    </Modal.Body>

    <Modal.Footer>
      <HYLButton color="green">
        Sign Up
      </HYLButton>
    </Modal.Footer>
  </Modal>
);

// Prop Validation
SessionModal.propTypes = {
  event: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  signup: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SessionModal;
