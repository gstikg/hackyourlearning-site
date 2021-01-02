// Importing Components from node_modules
import React from 'react';
import PropTypes from 'prop-types';

// Importing Styles
import '../stylesheets/HYLButton.scss';

const HYLButton = ({
  children,
  color,
  width,
  onClick,
}) => {
  const innerWidth = (width - 10);

  return (
    <div
      className={`button__container ${color}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      style={{
        width: `${width}px`,
      }}
    >
      <div
        className="button__inner"
        style={{
          width: `${innerWidth}px`,
        }}
      >
        <p className="button__text">
          {children}
        </p>
      </div>
    </div>
  );
};

// Default prop declaration
HYLButton.defaultProps = {
  width: '125',
};

// Prop Validation
HYLButton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default HYLButton;
