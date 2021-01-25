import React, { useState } from 'react';

import { FaAngleUp } from 'react-icons/fa';

import '../stylesheets/ToTop.scss';

const ToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 25) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 25) {
      setShowScroll(false);
    }
  };

  const useEffect = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <button
        className="to-top"
        type="button"
        title="Go to top"
        onClick={useEffect}
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        <FaAngleUp />
      </button>
    </>
  );
};

export default ToTop;
