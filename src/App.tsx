import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ProjectDetail from "./components/ProjectDetail";

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
      <div className="relative">
        <Header lang={lang} setLang={handleLangChange} />
        <Routes>
          <Route
            path="/"
            element={
              <main className="overflow-hidden md:overflow-y-auto h-screen md:snap-y md:snap-mandatory scroll-smooth">
                <Hero id="hero" lang={lang} />
                <About id="about" lang={lang} />
                <Projects lang={lang} />
                <Contact lang={lang} />
              </main>
            }
          />
          <Route
            path="/projects"
            element={
              <main className="pt-20">
                <Projects lang={lang} />
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
