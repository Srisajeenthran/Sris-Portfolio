import { motion } from "framer-motion";
import {
  ArrowDownCircle,
  Download,
  MapPin,
  Briefcase,
  Code,
  Brain,
  Sparkles,
} from "lucide-react";
import profilePhoto from "../assets/profile.jpg";

const PROFILE_PHOTO = profilePhoto;
const FALLBACK_PROFILE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='420' viewBox='0 0 420 420'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='40%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='60%25' stop-color='%236369f8'/%3E%3Cstop offset='100%25' stop-color='%231e1b4b'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='420' height='420' fill='%230a0a1b'/%3E%3Ccircle cx='210' cy='150' r='90' fill='url(%23g)' opacity='0.85'/%3E%3Crect x='95' y='240' width='230' height='130' rx='65' fill='url(%23g)' opacity='0.65'/%3E%3C/svg%3E";

const heroStats = [
  {
    label: "Experience",
    value: "2+ Internships",
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    label: "Projects",
    value: "15+ Builds",
    icon: Code,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    label: "Research",
    value: "AI Interview Suite",
    icon: Brain,
    gradient: "from-blue-600 to-cyan-500",
  },
];

const Hero = () => (
  <section
    id="hero"
    className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-8"
    >
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1">
          Full Stack Developer · AI-driven Systems
        </span>
        <span className="inline-flex items-center gap-1 text-slate-400">
          <MapPin size={16} />
          Kalmunai, Sri Lanka
        </span>
      </div>
      <h1 className="text-4xl font-display leading-tight text-white md:text-5xl">
        Srisajeenthran Sritharan builds{" "}
        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          premium, AI-augmented experiences
        </span>{" "}
        across web, mobile, and human capital platforms.
      </h1>
      <p className="text-lg text-slate-400">
        Software Engineering undergraduate at SLIIT specialising in Information
        Technology, blending full-stack craftsmanship with AI/ML research on
        intelligent recruitment and interview automation. Focused on high-impact
        systems that feel as thoughtful as they are performant.
      </p>
      <div className="flex flex-wrap gap-4">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/60"
        >
          <ArrowDownCircle
            size={18}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
          View Projects
        </motion.a>
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10"
        >
          <Download
            size={18}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
          Download CV
        </motion.a>
      </div>
      <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
        {heroStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-4 backdrop-blur transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />
              <div className="relative flex items-center gap-3">
                <div
                  className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} p-2 shadow-lg`}
                >
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      whileHover={{ scale: 1.02, rotate: 0 }}
      className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-blue-900/40 p-1 shadow-2xl transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-teal-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative rounded-3xl bg-slate-950/70 p-6 backdrop-blur">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <motion.img
            src={PROFILE_PHOTO}
            alt="Portrait of Srisajeenthran Sritharan"
            className="h-96 w-full object-cover object-top brightness-110 transition-all duration-500 group-hover:scale-105 group-hover:brightness-115"
            loading="lazy"
            onError={(event) => {
              if (event.currentTarget.dataset.fallbackApplied) return;
              event.currentTarget.dataset.fallbackApplied = "true";
              event.currentTarget.src = FALLBACK_PROFILE;
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
          <div className="absolute bottom-4 left-4 z-10 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Currently crafting
              </p>
            </div>
            <p className="text-lg font-semibold text-white">
              LLM interview intelligence
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/5 p-4 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <p className="text-xs text-slate-400">Stack</p>
            <p className="mt-1 font-semibold text-white">
              React · Spring Boot · MongoDB · LLMs
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/5 p-4 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <p className="text-xs text-slate-400">Focus</p>
            <p className="mt-1 font-semibold text-white">
              AI-assisted hiring pipelines & immersive UX
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
