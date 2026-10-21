
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Hero from "./components/hero/hero";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  useEffect(() => {
    const themePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const updateTheme = (event) => {
      document.documentElement.setAttribute(
        "data-theme",
        event.matches ? "dark" : "light"
      );
    };

    updateTheme(themePreference);
    themePreference.addEventListener("change", updateTheme);

    return () => {
      themePreference.removeEventListener("change", updateTheme);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
