import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectText from "../i18n/projects";
import ScrollIndicator from "./ScrollIndicator";
import AnimatedBackground from "./AnimatedBackground";
import { projectsData } from "../data/projects";

interface ProjectsProps {
  lang: "es" | "en";
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <motion.section
      id="projects"
      className="relative flex items-center justify-center min-h-screen md:h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 py-12 sm:py-16 md:py-16 overflow-hidden md:snap-start md:snap-always"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <AnimatedBackground />
      <div className="w-full max-w-6xl text-center z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 dark:text-white">
          {projectText[lang].title}
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
          {projectText[lang].filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setSelectedCategory(value)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full border transition-all duration-300 touch-manipulation ${
                selectedCategory === value
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-transparent border-gray-400 text-gray-600 dark:text-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="backdrop-blur-lg bg-white/30 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl text-left hover:scale-[1.02] transition-transform duration-300 overflow-hidden flex flex-col"
              whileHover={{ y: -5 }}
            >
              {/* Imagen clickeable */}
              <div
                onClick={() => handleProjectClick(project.id)}
                className="cursor-pointer relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="w-full h-32 sm:h-40 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x250?text=Project+Image";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="text-3xl sm:text-4xl mb-2">{project.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title[lang]}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description[lang]}
                </p>

                {/* Botón más info */}
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="w-full mt-auto px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base touch-manipulation"
                >
                  {lang === "es" ? "Más información" : "More information"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
       <ScrollIndicator sectionId="contact" />
    </motion.section>
  );
};

export default Projects;
