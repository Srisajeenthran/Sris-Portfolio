import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownCircle,
  Download,
  MapPin,
  Briefcase,
  Code,
  Brain,
  BrainCircuit,
} from "lucide-react";
import profilePhoto from "../assets/profile.jpg";
import GlowContainer from "./GlowContainer.jsx";
import MagneticButton from "./MagneticButton.jsx";

const PROFILE_PHOTO = profilePhoto;
const FALLBACK_PROFILE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='420' viewBox='0 0 420 420'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='40%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='60%25' stop-color='%236369f8'/%3E%3Cstop offset='100%25' stop-color='%231e1b4b'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='420' height='420' fill='%230a0a1b'/%3E%3Ccircle cx='210' cy='150' r='90' fill='url(%23g)' opacity='0.85'/%3E%3Crect x='95' y='240' width='230' height='130' rx='65' fill='url(%23g)' opacity='0.65'/%3E%3C/svg%3E";

const INITIAL_STATS = [
  {
    label: "Experience",
    value: "2+ Internships",
    icon: Briefcase,
    gradient: "from-primary to-primary/60",
  },
  {
    label: "Projects",
    value: "15+ Builds",
    icon: Code,
    gradient: "from-primary/80 to-primary/40",
  },
  {
    label: "Research",
    value: "AI Interview Suite",
    icon: Brain,
    gradient: "from-primary/90 to-primary/50",
  },
];

const Hero = () => {
  const [repoCount, setRepoCount] = useState("15+");

  useEffect(() => {
    fetch("https://api.github.com/users/Srisajeenthran")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos) {
          setRepoCount(data.public_repos + "+");
        }
      })
      .catch((err) => console.error("Error fetching GitHub stats", err));
  }, []);

  const heroStats = INITIAL_STATS.map((stat) => 
    stat.label === "Projects" ? { ...stat, value: `${repoCount} Builds` } : stat
  );

  return (
  <section
    id="hero"
    className="relative flex min-h-[90vh] flex-col justify-center py-20 lg:py-32"
  >
    {/* Background Decorative Elements */}

    <div className="relative mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1.2fr_0.9fr] lg:items-end lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <div className="mb-4 lg:mb-8 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-[10px] sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7],
                filter: ["drop-shadow(0 0 0px #34d399)", "drop-shadow(0 0 8px #34d399)", "drop-shadow(0 0 0px #34d399)"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="text-emerald-400"
            >
              <BrainCircuit className="h-4 w-4" />
            </motion.div>
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Full Stack Engineer · AI & ML Technical Specialist
            </span>
          </motion.div>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter text-foreground">
          Srisajeenthran <br />
          <span className="text-reveal block">Sritharan</span>
        </h1>

        <div className="mt-12 max-w-2xl">
          <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Crafting <span className="text-foreground font-black italic">intelligent</span> human-centric systems at the intersection of full-stack engineering and AI/ML research.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <MagneticButton>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-primary px-10 py-5 text-lg font-black text-white transition-all hover:bg-primary/90"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span>Explore Work</span>
              <ArrowDownCircle className="h-6 w-6 transition-transform group-hover:translate-y-1" />
            </motion.a>
          </MagneticButton>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-lg font-black tracking-tight text-foreground/80 transition-colors hover:text-primary"
          >
            <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            <span className="border-b-2 border-primary/20 group-hover:border-primary">CV RECAP</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-20 lg:mt-0"
      >
        {/* Floating Stats */}
        <div className="absolute -left-16 top-10 z-20 hidden lg:block">
          {heroStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + idx * 0.1 }}
              className="mb-4 flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className={`rounded-lg bg-gradient-to-br ${stat.gradient} p-2`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                <p className="font-black text-foreground">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <GlowContainer className="group relative overflow-hidden rounded-[2.5rem] border-4 border-border/10 bg-card p-2 transition-all duration-700 hover:border-primary/20 max-w-[450px] mx-auto lg:mx-0">
          <div className="relative overflow-hidden rounded-[2rem]">
            <motion.img
              src={PROFILE_PHOTO}
              alt="Srisajeenthran Sritharan - AI Specialist & Full Stack Engineer"
              className="h-[450px] sm:h-[500px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              onError={(e) => {
                if (!e.currentTarget.dataset.fallbackApplied) {
                  e.currentTarget.dataset.fallbackApplied = "true";
                  e.currentTarget.src = FALLBACK_PROFILE;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            
            <div className="absolute bottom-8 left-8 right-8 z-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-black uppercase tracking-widest text-white/80">Based in Sri Lanka</p>
              <h3 className="mt-1 text-2xl font-black text-white">Crafting intelligent pipelines.</h3>
            </div>
          </div>
        </GlowContainer>

        {/* Decorative Tag */}
        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 z-30">
          <div className="flex items-center gap-3 rounded-full border border-border bg-foreground p-3 sm:p-4 text-background shadow-2xl backdrop-blur-md">
            <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="text-[10px] sm:text-sm font-black uppercase tracking-tighter">AI-Augmented Logic</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;
