import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/projects";
import AnimatedBackground from "./AnimatedBackground";

interface ProjectDetailProps {
  lang: "es" | "en";
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ lang }) => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      // Si el proyecto no existe, redirigir a home
      navigate("/");
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const handleBack = () => {
    navigate("/");
    // Scroll suave a proyectos después de un pequeño delay
    setTimeout(() => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <motion.section
      data-no-snap
      className="relative min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedBackground />
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 pb-20">
        {/* Botón de regreso */}
        <motion.button
          onClick={handleBack}
          className="relative z-50 mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer touch-manipulation pointer-events-auto"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm sm:text-base">
            {lang === "es" ? "Volver a proyectos" : "Back to projects"}
          </span>
        </motion.button>

        {/* Header del proyecto */}
        <div className="mb-8 sm:mb-12">
          <div className="text-5xl sm:text-6xl mb-4">{project.icon}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title[lang]}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {project.description[lang]}
          </p>
        </div>

        {/* Imagen principal */}
        <motion.div
          className="mb-8 sm:mb-12 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={project.image}
            alt={project.title[lang]}
            className="w-full h-64 sm:h-96 md:h-[500px] object-cover"
            onError={(e) => {
              // Fallback si la imagen no existe
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x500?text=Project+Image";
            }}
          />
        </motion.div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Columna principal */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "es" ? "Acerca del proyecto" : "About the project"}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.longDescription[lang]}
              </p>
            </motion.div>

            {/* Características */}
            {project.features && (
              <motion.div
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {lang === "es" ? "Características" : "Features"}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.features[lang].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-xl sticky top-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {lang === "es" ? "Detalles" : "Details"}
              </h3>

              {/* Tecnologías */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase">
                  {lang === "es" ? "Tecnologías" : "Technologies"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-500/10 dark:bg-orange-400/20 text-orange-600 dark:text-orange-400 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Categoría */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase">
                  {lang === "es" ? "Categoría" : "Category"}
                </h4>
                <span className="text-base text-gray-700 dark:text-gray-300 capitalize">
                  {project.category}
                </span>
              </div>

              {/* Enlaces */}
              <div className="space-y-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg text-center hover:opacity-90 transition-opacity"
                  >
                    {lang === "es" ? "Ver sitio web" : "View website"}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {lang === "es" ? "Ver código" : "View code"}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;

