import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

interface HeaderProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
    localStorage.setItem("dark-mode", (!darkMode).toString());
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // Si estamos en una página de detalle, navegar a home primero
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 md:flex items-center justify-between ${
          darkMode ? "text-white" : "text-black"
        } z-50`}
      >
        <div className="flex items-center justify-between md:hidden w-full">
          <img
            src={darkMode ? "/logo_white.svg" : "/logo_black.svg"}
            alt="Logo"
            className="mr-2 sm:mr-4 h-8 sm:h-10"
          />
          <button 
            onClick={toggleSidebar} 
            className="z-50 p-2 touch-manipulation"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <FaTimes className="text-xl sm:text-2xl" />
            ) : (
              <FaBars className="text-xl sm:text-2xl" />
            )}
          </button>
        </div>

        <div className="hidden md:flex text-xl font-bold items-center">
          <img
            src={darkMode ? "/logo_white.svg" : "/logo_black.svg"}
            alt="Logo"
            className="mr-2"
          />
        </div>

        <div
          className={`fixed z-50 flex flex-col items-end gap-2 ${
            isSidebarOpen ? "bottom-32" : "bottom-4"
          } right-3 sm:right-4 md:static md:bottom-4 md:right-4 md:flex-row md:items-center`}
        >
          <button
            onClick={toggleDarkMode}
            className="text-xl sm:text-2xl p-2 sm:p-2.5 rounded-full border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition touch-manipulation"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <MdOutlineLightMode /> : <MdLightMode />}
          </button>

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition touch-manipulation"
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </header>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-1/2 left-1/2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform transform z-50 ${
          isSidebarOpen
            ? "translate-x-[-50%] translate-y-[-50%] opacity-100"
            : "translate-x-[-150%] opacity-0"
        } md:hidden`}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div>
          <ul className="flex flex-col gap-4">
            <li className="py-2 text-center">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-black dark:text-white block w-full text-lg py-2 touch-manipulation"
              >
                Home
              </button>
            </li>
            <li className="py-2 text-center">
              <button
                onClick={() => scrollToSection("about")}
                className="text-black dark:text-white block w-full text-lg py-2 touch-manipulation"
              >
                About
              </button>
            </li>
            <li className="py-2 text-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-black dark:text-white block w-full text-lg py-2 touch-manipulation"
              >
                Projects
              </button>
            </li>
            <li className="py-2 text-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black dark:text-white block w-full text-lg py-2 touch-manipulation"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex fixed top-0 left-0 h-screen w-64 items-center z-50">
        <div className="pl-10">
          <ul className="flex flex-col gap-10 mt-20">
            <li className="transform -rotate-90 origin-top-left py-4 text-center">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-black dark:text-white block cursor-pointer hover:opacity-70 transition-opacity"
              >
                Home
              </button>
            </li>
            <li className="transform -rotate-90 origin-top-left py-4 text-center">
              <button
                onClick={() => scrollToSection("about")}
                className="text-black dark:text-white block cursor-pointer hover:opacity-70 transition-opacity"
              >
                About
              </button>
            </li>
            <li className="transform -rotate-90 origin-top-left py-4 text-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-black dark:text-white block cursor-pointer hover:opacity-70 transition-opacity"
              >
                Projects
              </button>
            </li>
            <li className="transform -rotate-90 origin-top-left py-4 text-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black dark:text-white block cursor-pointer hover:opacity-70 transition-opacity"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
