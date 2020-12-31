// Importing Components from node_modules
import React from 'react';
import PropTypes from 'prop-types';

// Importing Styles
import '../stylesheets/HYLButton.scss';

const HYLButton = ({
  children,
  color,
  width,
  onClick
}) => (
  <div
    className={`button__container ${color}`}
    href="#"
    onClick={onClick}
    style={{
      width: {width},
    }}
  >
    <div className="button__inner">
      <p className="button__text">
        {children}
      </p>
    </div>
  </div>
);

HYLButton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HYLButton;
