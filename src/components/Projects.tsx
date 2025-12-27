import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectText from "../i18n/projects";
import AnimatedBackground from "./AnimatedBackground";
import { projectsData } from "../data/projects";

interface ProjectsProps {
  id?: string;
  lang: "es" | "en";
}

const Projects: React.FC<ProjectsProps> = ({ id, lang }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Curated tags based on project technologies for filtering
  const techTags = ["HubSpot CMS", "React", "Next.js", "Node.js", "TypeScript", "AWS", "Serverless", "PHP"];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => 
          p.category === selectedCategory || 
          p.technologies.some(tech => tech.toLowerCase().includes(selectedCategory.toLowerCase()))
        );

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id={id}
      className="relative min-h-[100dvh] md:h-screen md:min-h-0 bg-transparent dark:bg-transparent md:snap-start md:snap-always overflow-visible flex flex-col pt-24 pb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <AnimatedBackground variant="green" />
      
      <div className="relative z-10 w-full mb-6 px-6 md:px-20 lg:px-32">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
          {projectText[lang].title}
        </h2>
        
        <div className="flex items-center gap-5  justify-between">
          <div className="w-full lg:w-auto">
            {/* Desktop Filters (Chips) */}
            <div className="hidden md:flex flex-wrap gap-2 items-center">
              {/* Categories */}
              {projectText[lang].filters.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setSelectedCategory(value)}
                  className={`px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all duration-300 ${
                    selectedCategory === value
                      ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-white/50 dark:bg-white/5 border-gray-200 dark:border-gray-700 text-gray-400 hover:border-orange-400"
                  }`}
                >
                  {label}
                </button>
              ))}
              
              <div className="w-[1px] h-4 bg-gray-200 dark:bg-white/10 mx-2" />
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {techTags.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedCategory(tech.toLowerCase())}
                    className={`px-3 py-1 text-[9px] font-bold uppercase tracking-tighter rounded-md transition-all duration-300 ${
                      selectedCategory === tech.toLowerCase()
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white"
                        : "bg-transparent border border-gray-200 dark:border-white/10 text-gray-400 hover:border-orange-400"
                    }`}
                  >
                    #{tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filters (Dropdown) */}
            <div className="md:hidden relative w-full">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-12 px-5 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white text-xs font-black uppercase tracking-widest appearance-none outline-none focus:border-orange-500"
              >
                <optgroup label={lang === 'es' ? 'Categorías' : 'Categories'}>
                  {projectText[lang].filters.map(({ label, value }) => (
                    <option key={value} value={value} className="bg-white dark:bg-gray-800">{label}</option>
                  ))}
                </optgroup>
                <optgroup label={lang === 'es' ? 'Tecnologías' : 'Technologies'}>
                  {techTags.map((tech) => (
                    <option key={tech} value={tech.toLowerCase()} className="bg-white dark:bg-gray-800">#{tech}</option>
                  ))}
                </optgroup>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scrollTo('left')}
              className="p-2.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-orange-500 hover:text-white transition-all shadow-sm active:scale-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scrollTo('right')}
              className="p-2.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-orange-500 hover:text-white transition-all shadow-sm active:scale-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Constraints Container for Slider - Prevents overlap with Side Nav */}
      <div className="relative z-10 w-full max-w-[100vw] md:max-w-[calc(100vw-120px)] lg:max-w-[calc(100vw-150px)]">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-hidden gap-8 px-6 md:px-20 lg:px-32 pb-10 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[85vw] md:w-[380px] h-[52vh] md:h-[480px] snap-center"
              layout
            >
              <div className="group h-full flex flex-col bg-white/95 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-orange-500/10 transition-all duration-500">
                {/* Image or Private Placeholder Section */}
                <div 
                  className="relative h-1/2 overflow-hidden cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                >
                  {project.isPrivate ? (
                    <div className="w-full h-full bg-gray-50 dark:bg-white/5 flex flex-col items-center justify-center gap-4 transition-colors group-hover:bg-white dark:group-hover:bg-white/10">
                      <div className="relative">
                        <span className="text-6xl filter drop-shadow-2xl">{project.icon}</span>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500">
                        {lang === 'es' ? 'Proyecto Privado' : 'Private Project'}
                      </span>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                          {lang === 'es' ? 'Ver Detalles' : 'View Details'}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    {!project.isPrivate && <span className="text-3xl">{project.icon}</span>}
                    {project.isPrivate && <div className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-500 text-[8px] font-black uppercase tracking-widest">{project.category}</div>}
                    <div className="flex gap-1">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span key={i} className="text-[9px] px-2 py-1 rounded bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                    {project.title[lang]}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                    {project.description[lang]}
                  </p>

                  <div className="mt-auto">
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className="group/btn flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white hover:text-orange-500 transition-colors"
                    >
                      <span className="relative">
                        {lang === "es" ? "Conocer más" : "Learn more"}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover/btn:w-full" />
                      </span>
                      <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover/btn:border-orange-500 group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-all">
                        <svg className="w-4 h-4 translate-x-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Minimalist Scrollbar */}
      <div className="relative z-10 mx-6 md:mx-20 lg:mx-32 mt-2 max-w-[200px]">
        <div className="relative h-[2px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
