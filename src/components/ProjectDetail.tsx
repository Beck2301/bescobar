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
    navigate("/projects");
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
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl sm:text-6xl">{project.icon}</div>
            {project.isPrivate && (
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-orange-500/20">
                {lang === 'es' ? 'Proyecto Privado' : 'Private Project'}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
            {project.title[lang]}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            {project.description[lang]}
          </p>
        </div>

        {/* Imagen principal o Placeholder Privado */}
        <motion.div
          className="mb-12 sm:mb-16 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 relative bg-gray-50/50 dark:bg-gray-900/50"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {project.isPrivate ? (
            <div className="w-full h-64 sm:h-96 md:h-[400px] flex flex-col items-center justify-center gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
              <div className="relative z-10 scale-90 sm:scale-100">
                <span className="text-8xl filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)]">{project.icon}</span>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="text-center relative z-10 px-6">
                <p className="text-gray-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
                  {lang === 'es' ? 'CONTENIDO PRIVADO' : 'PRIVATE CONTENT'}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mx-auto leading-relaxed italic">
                  {lang === 'es' 
                    ? '"Este desarrollo técnico se encuentra bajo protección de confidencialidad."' 
                    : '"This technical development is under confidentiality protection."'}
                </p>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-64 sm:h-96 md:h-[450px] flex items-center justify-center overflow-hidden">
              {/* Subtle mesh background color */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
              
              {/* Main Image Container - Limited height to prevent pixelation */}
              <div className="relative z-10 w-full h-full p-8 sm:p-12 md:p-16 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="max-w-[90%] max-h-[300px] md:max-h-[340px] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:scale-[1.03]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x500?text=Project+Image";
                  }}
                />
              </div>
            </div>
          )}
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

