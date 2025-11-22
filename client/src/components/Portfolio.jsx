import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Chatbot from "./Chatbot.jsx";

const Portfolio = () => (
  <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-blue-600/30 blur-[140px]" />
      <div className="absolute top-32 right-10 h-80 w-80 rounded-full bg-cyan-500/30 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[180px]" />
    </div>
    <div className="relative z-10 px-4 sm:px-6 lg:px-10">
      <Navbar />
      <main className="space-y-28 pb-28 pt-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  </div>
);

export default Portfolio;