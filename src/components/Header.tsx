import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { HiHome, HiUser, HiCollection, HiMail } from "react-icons/hi";

interface HeaderProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

const sections = [
  { id: "hero", label: { es: "Inicio", en: "Home" }, icon: <HiHome /> },
  { id: "about", label: { es: "Sobre mí", en: "About" }, icon: <HiUser /> },
  { id: "projects", label: { es: "Proyectos", en: "Projects" }, icon: <HiCollection /> },
  { id: "contact", label: { es: "Contacto", en: "Contact" }, icon: <HiMail /> },
];

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark", savedMode);

    if (location.pathname === "/projects" || location.pathname.startsWith("/project/")) {
      setActiveSection("projects");
      return;
    }

    if (location.pathname === "/") {
      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      };

      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, observerOptions);

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }
  }, [location.pathname]); // Re-observe if we navigate back to home

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("dark-mode", newMode.toString());
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (sectionId === "projects") {
        navigate("/projects");
      } else {
        navigate("/");
        // Wait for navigation and DOM update
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <>
      {/* Top Header - Controls */}
      <header className="fixed top-0 left-0 right-0 h-20 px-6 md:px-12 flex items-center justify-between z-[60] bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 transition-all duration-300">
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={darkMode ? "/logo_white.svg" : "/logo_black.svg"}
              alt="Logo"
              className="h-8 md:h-10 transition-all duration-300"
            />
          </motion.div>
          
          <div className="hidden md:flex h-6 w-[2px] bg-gray-300 dark:bg-white/30 mx-2" />
          <motion.span 
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:block text-[10px] font-black uppercase tracking-[0.25em] text-gray-900 dark:text-white"
          >
            {sections.find(s => s.id === activeSection)?.label[lang]}
          </motion.span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white hover:scale-110 transition-all shadow-sm"
          >
            {darkMode ? <MdOutlineLightMode size={20} /> : <MdLightMode size={20} />}
          </button>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white text-xs font-bold hover:scale-105 transition-all shadow-sm"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </header>

      {/* Desktop Navigation - Side Dot Indicator */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-8 z-50">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end"
          >
            <span className={`mr-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
              activeSection === section.id 
                ? "opacity-100 translate-x-0 text-orange-500" 
                : "opacity-0 translate-x-4 pointer-events-none text-gray-900 dark:text-white"
            }`}>
              {section.label[lang]}
            </span>
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id 
                ? "bg-orange-500 border-orange-500 scale-125 shadow-[0_0_15px_rgba(249,115,22,0.6)]" 
                : "bg-transparent border-gray-400 dark:border-white/30 hover:border-orange-400 group-hover:scale-110"
            }`} />
          </button>
        ))}
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-sm h-16 bg-white/90 dark:bg-black/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-around px-2 z-[70] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative flex flex-col items-center justify-center w-full h-full rounded-xl transition-all duration-300 cursor-pointer active:scale-90 ${
              activeSection === section.id 
                ? "text-orange-500" 
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <div className="text-2xl mb-0.5">{section.icon}</div>
            {activeSection === section.id && (
              <motion.div
                layoutId="activeTabMobile"
                className="absolute -bottom-1 w-1.5 h-1.5 bg-orange-500 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={`text-[9px] font-bold uppercase tracking-tight ${
              activeSection === section.id ? "opacity-100" : "opacity-70"
            }`}>
              {section.label[lang].split(" ")[0]}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Header;
