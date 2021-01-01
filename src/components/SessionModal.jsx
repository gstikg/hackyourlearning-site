// Importing Components from node_modules
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

// Import Icons
import { CgCloseO } from 'react-icons/cg';

// Importing Project-Defined Components
import HYLButton from './HYLButton';

// Importing Styles
import '../stylesheets/SessionModal.scss';

/*
  The following function is used to lock the body and prevent scrolling when the overlay/sidebar are
  visible.
  Note: when mounted, you can still scroll on the sidebar
*/
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
}

const SessionModal = ({
  event, // ala event name
  date,
  signup, // signup link
  children, // aka description
  setIsVisible,
}) => {
  useLockBodyScroll();

  return (
    <>
      <div
        id="overlay"
        className="session-modal--overlay"
      />

      <div className="session-modal--container">
        <CgCloseO
          className="session-modal--close-icon"
          onClick={() => { setIsVisible(false); }}
          style={{
            width: '30px',
            height: '30px',
          }}
        />

        <h2 className="session-info--event-name">
          {event}
        </h2>
        <h4 className="session-info--date">
          {date}
        </h4>
        <p>
          {children}
        </p>

        {(signup !== '')
          && (
            <HYLButton
              color="green"
            >
              Sign Up
            </HYLButton>
          )}
      </div>
    </>
  );
};

// Prop Validation
SessionModal.propTypes = {
  event: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  signup: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  setIsVisible: PropTypes.bool.isRequired,
};

export default SessionModal;
