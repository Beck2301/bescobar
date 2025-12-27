import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollIndicator from "./ScrollIndicator";
import AnimatedBackground from "./AnimatedBackground";

interface HeroProps {
  id?: string;
  lang: "es" | "en";
}

const heroText = {
  es: {
    greeting: "Hola, soy",
    name: "Bryan Escobar",
    role: "Full Stack Developer",
    tagline: "Tuner & Web Dev",
    cta: "Sobre mí"
  },
  en: {
    greeting: "Hi, I'm",
    name: "Bryan Escobar",
    role: "Full Stack Developer",
    tagline: "Tuner & Web Dev",
    cta: "About me"
  },
};

const Hero: React.FC<HeroProps> = ({ id, lang }) => {
  const content = heroText[lang];

  return (
    <motion.section
      id={id}
      className="relative flex flex-col items-center justify-center min-h-screen bg-transparent dark:bg-transparent overflow-hidden px-6 pt-20 md:pt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatedBackground variant="orange" />
      
      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-400 text-[10px] font-black uppercase tracking-widest mx-auto"
        >
          {content.tagline}
        </motion.div>

        {/* Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-100 dark:border-white/10 shadow-sm transition-transform hover:scale-105 duration-500">
            <img
              src="/Me.png"
              alt="Bryan Escobar"
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            {content.name}
          </h1>
          <p className="text-lg md:text-2xl font-medium text-gray-500 dark:text-gray-400 tracking-tight">
            {content.role}
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-8 pt-4"
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex flex-col items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-orange-500 transition-all"
          >
            <span>{content.cta}</span>
            <div className="w-[1px] h-12 bg-gray-200 dark:bg-white/20 group-hover:bg-orange-500 group-hover:h-16 transition-all duration-500" />
          </button>

          <div className="flex gap-10">
            <a href="https://github.com/Beck2301" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/bryan-escobar-guevara/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator sectionId="about" />
    </motion.section>
  );
};

export default Hero;
