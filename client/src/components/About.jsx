import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Target,
  Sparkles,
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const quickFacts = [
  {
    label: "Based in",
    value: "Kalmunai, Sri Lanka",
    icon: MapPin,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    label: "Education",
    value: "BSc (Hons) in IT – SLIIT",
    icon: GraduationCap,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    label: "Opportunities",
    value: "Software engineering internships & junior roles",
    icon: Briefcase,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    label: "Focus",
    value: "Full Stack · AI / ML",
    icon: Target,
    gradient: "from-rose-500 to-orange-500",
  },
];

const About = () => (
  <section id="about" className="space-y-10">
    <SectionHeader
      eyebrow="About Me"
      title="Purpose-built engineering with AI-first thinking"
      description="Drawing from academic research on AI-driven recruitment and hands-on product work, I design systems that treat user experience, scalability, and intelligence as a single craft."
    />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur"
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 p-2 shadow-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">About Me</h3>
        </div>
        <p className="text-lg leading-relaxed text-slate-300">
          I am an undergraduate student at the Sri Lanka Institute of
          Information Technology, specializing in Information Technology
          (Student Ref: IT22601292). My research focuses on AI-driven interview
          pipelines and human capital management systems that integrate
          LLM-powered question generation, automated candidate scoring, and
          ethical hiring safeguards. Beyond research, I have built
          production-grade solutions using MERN, Spring Boot, and Vite-based
          architectures, consistently incorporating ML and NLP insights to
          enhance user experience and system intelligence.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {quickFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group/item relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/5 p-4 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${fact.gradient} opacity-0 transition-opacity duration-300 group-hover/item:opacity-10`}
                />
                <div className="relative flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${fact.gradient} p-2 shadow-lg`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-400">{fact.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {fact.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
