import React from "react";
import Navbar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-4 text-center">
        <small>© {new Date().getFullYear()} Delong Zhu. All rights reserved.</small>
      </footer>
    </>
  );
}
