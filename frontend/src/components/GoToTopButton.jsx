import React, { useEffect, useState } from "react";
import { svg } from "../assets/svgs";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-purple-600 opacity-50 text-white p-3 rounded-full shadow-lg hover:opacity-100 transition duration-300"
        >
          <img src={svg.right} alt="gototop" className="w-8 invert -rotate-90"/>
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
