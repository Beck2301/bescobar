import React from "react";
import { motion } from "framer-motion";
import aboutText from "../i18n/about";
import ScrollIndicator from "./ScrollIndicator";
import AnimatedBackground from "./AnimatedBackground";

interface AboutProps {
  id?: string;
  lang: "es" | "en";
}

const About: React.FC<AboutProps> = ({ id, lang }) => {
  return (
    <motion.section
      id={id}
      className="relative flex items-center justify-center min-h-screen md:h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 py-12 sm:py-16 md:py-0 overflow-hidden md:snap-start md:snap-always"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <AnimatedBackground />
      <motion.div
        className="max-w-3xl w-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
          {aboutText[lang].title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {aboutText[lang].description.trim()}
        </p>
      </motion.div>
       <ScrollIndicator sectionId="projects" />
    </motion.section>
    
  );
};

export default About;
