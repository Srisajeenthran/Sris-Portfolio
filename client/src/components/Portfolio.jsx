import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Research from "./Research.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Chatbot from "./Chatbot.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import RevealContainer from "./RevealContainer.jsx";
import SmoothScroll from "./SmoothScroll.jsx";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleOver = (e) => {
      if (e.target.closest("a, button, [role='button']")) setIsHovering(true);
      else setIsHovering(false);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-primary/50 mix-blend-difference lg:block"
      animate={{
        x: mousePos.x - 16,
        y: mousePos.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(var(--color-primary), 0.1)" : "transparent",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

const AuroraBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-background" />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-[100px]"
    />
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
        x: [0, -80, 0],
        y: [0, 100, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute -right-20 top-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"
    />
    <div className="dot-pattern absolute inset-0" />
  </div>
);

const Portfolio = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <SmoothScroll>
    <div className="relative min-h-screen transition-colors duration-500">
      <CustomCursor />
      <AuroraBackground />

      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="mx-auto max-w-7xl space-y-32 pb-32 pt-20">
          <RevealContainer><Hero /></RevealContainer>
          <RevealContainer><About /></RevealContainer>
          <RevealContainer><Research /></RevealContainer>
          <RevealContainer><Skills /></RevealContainer>
          <RevealContainer><Experience /></RevealContainer>
          <RevealContainer><Projects /></RevealContainer>
          <RevealContainer><Contact /></RevealContainer>
        </main>
        <Footer />
        <Chatbot />
        <ScrollToTop />
      </div>
    </div>
    </SmoothScroll>
  );
};

export default Portfolio;