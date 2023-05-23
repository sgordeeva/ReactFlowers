import React, { useEffect, useState } from 'react';
import arrow from './../assets/img/arrow.png';

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {backToTop && (
        <button onClick={scrollUp} className="backToTop_btn">
          <img src={arrow} className="backToTop_img" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
