import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import '../styles/ScrollToTop.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = function() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(function() {
    window.addEventListener('scroll', toggleVisibility);
    return function() {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top" title="Back to top">
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}