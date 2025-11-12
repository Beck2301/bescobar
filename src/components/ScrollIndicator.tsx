import React from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  sectionId: string;
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ sectionId, className = "" }) => {
  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      className={`absolute bottom-10 ${className}`}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <button
        onClick={scrollToSection}
        aria-label={`Scroll to ${sectionId}`}
        className="cursor-pointer hover:opacity-70 transition-opacity"
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </motion.div>
  );
};

export default ScrollIndicator;
