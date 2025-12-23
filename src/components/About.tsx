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
  const content = aboutText[lang];

  return (
    <motion.section
      id={id}
      className="relative flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-6 py-20 overflow-hidden md:snap-start md:snap-always"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <AnimatedBackground variant="blue" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Bio & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                {content.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-6 leading-tight">
                {content.subtitle}
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {content.description}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {content.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-4 rounded-2xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Tech Radar */}
          <div className="lg:col-span-5">
            <motion.div
              className="bg-white/95 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-orange-500" />
                Technical Stack
              </h4>

              <div className="space-y-8">
                {content.skillGroups.map((group, groupIdx) => (
                  <div key={groupIdx} className="space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white">
                      {group.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1.5 bg-gray-50 dark:bg-white/10 border border-gray-100 dark:border-white/10 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300 hover:border-orange-500 hover:bg-white dark:hover:bg-white/20 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollIndicator sectionId="projects" />
    </motion.section>
  );
};

export default About;
