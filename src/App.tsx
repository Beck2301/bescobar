import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "es" || storedLang === "en") {
      setLang(storedLang);
    } else {
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      setLang(browserLang);
      localStorage.setItem("lang", browserLang);
    }
  }, []);

  const handleLangChange = (newLang: "es" | "en") => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="relative">
        <Header lang={lang} setLang={handleLangChange} />
        <Routes>
          <Route
            path="/"
            element={
              <main className="h-auto md:h-screen overflow-visible md:overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth overflow-x-hidden">
                <Hero id="hero" lang={lang} />
                <About id="about" lang={lang} />
                <Projects id="projects" lang={lang} />
                <Contact id="contact" lang={lang} />
                <div className="h-20 md:hidden" /> {/* Final bottom spacer */}
              </main>
            }
          />

          <Route
            path="/project/:projectId"
            element={<ProjectDetail lang={lang} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
