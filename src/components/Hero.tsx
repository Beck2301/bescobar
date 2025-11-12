import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import AnimatedBackground from "./AnimatedBackground";

interface HeroProps {
  id?: string;
  lang: "es" | "en";
}

const heroText = {
  es: {
    name: "Bryan Escobar",
    role: "Desarrollador Web",
    aboutBtn: "Sobre mí",
  },
  en: {
    name: "Bryan Escobar",
    role: "Web Developer",
    aboutBtn: "About me",
  },
};

const Hero: React.FC<HeroProps> = ({ id, lang }) => {
  return (
    <motion.section
      id={id}
      className="relative flex items-center justify-center min-h-screen md:h-screen bg-white dark:bg-gray-900 md:snap-start md:snap-always overflow-hidden py-12 md:py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatedBackground />
      <div className="text-center max-w-xl px-4 sm:px-6 z-10">
        <div className="relative mb-4 sm:mb-6 inline-block">
          <img
            src="/Me.png"
            alt="Bryan Escobar"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 object-cover rounded-full mx-auto shadow-xl z-10 relative"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 px-2">
          {heroText[lang].name}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 dark:from-orange-300 dark:to-pink-400 mb-6 px-2">
          {heroText[lang].role}
        </p>

        <motion.button
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg text-white font-medium rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg hover:shadow-xl transition-all cursor-pointer touch-manipulation"
        >
          {heroText[lang].aboutBtn}
        </motion.button>
      </div>

      {/* Línea decorativa inferior */}
      <img
        src="/linea.svg"
        alt="Line"
        className="absolute md:-right-72 right-0 md:bottom-0 -bottom-52 md:w-auto w-64 opacity-70"
      />

      <ScrollIndicator sectionId="about" />

    </motion.section>
  );
};

export default Hero;
