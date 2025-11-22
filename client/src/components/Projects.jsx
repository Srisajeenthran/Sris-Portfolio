import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import food_del from "../assets/projects/Food-del.png";
import Tryfit from "../assets/projects/Tryfit.png";
import hotel_img from "../assets/projects/hotel-management.png";
import pizza_img from "../assets/projects/tasty-pizza.png";

const fallbackProjectImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='360' viewBox='0 0 600 360'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop stop-color='%2331247A' offset='0%25'/%3E%3Cstop stop-color='%23553399' offset='50%25'/%3E%3Cstop stop-color='%23E1467C' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='360' fill='%23101227'/%3E%3Crect x='40' y='60' width='520' height='240' rx='36' fill='url(%23g)' opacity='0.9'/%3E%3C/svg%3E";

const projects = [
  {
    tag: "Final Year Research",
    title:
      "Dynamic Interview Question Generation & Automated Candidate Evaluation",
    description:
      "LLM-powered HR suite that generates contextual interviews, scores responses with GPT/BERT, mitigates bias, and syncs insights to human capital systems.",
    tech: ["LLMs", "GPT/BERT", "NLP", "Node.js", "React"],
    glow: "from-blue-600 via-cyan-500 to-teal-500",
    image: "/projects/interview-suite.jpg",
    links: {
      live: "https://www.behance.net/gallery/interview-intelligence",
      github: "https://github.com/Shamilika15/HR-Management.git",
    },
  },
  {
    tag: "MERN",
    title: "TryFit – Virtual Dressing Room E-commerce",
    description:
      "Fashion commerce platform with admin & customer portals, virtual dressing via Python OpenCV, and a seamless React storefront tied to Node/Express APIs and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Python OpenCV"],
    glow: "from-blue-500 via-cyan-500 to-emerald-500",
    image: Tryfit,
    links: {
      live: "https://github.com/Nilavan2020/TryFitOn.git",
      github: "https://github.com/Nilavan2020/TryFitOn.git",
    },
  },
  {
    tag: "MERN",
    title: "TastyPizza – Online Pizza Ordering Website",
    description:
      "A modern React + Vite powered pizza ordering interface with category browsing, detailed order views, cart flow, and smooth micro-animations. Designed with Tailwind CSS v4 and Framer Motion for a clean and responsive customer experience.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    glow: "from-yellow-400 via-red-500 to-orange-600",
    image: pizza_img,
    links: {
      live: "https://deluxe-beijinho-d8097c.netlify.app/",
      github: "https://github.com/Srisajeenthran/TastyPizza.git",
    },
  },
  {
    tag: "MERN",
    title: "Food Delivery Experience",
    description:
      "Dual-sided ordering with live status tracking, rider dashboard, secure payments, and a polished React admin cockpit for fulfilment teams.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Payments"],
    glow: "from-blue-600 via-cyan-500 to-teal-500",
    image: food_del,
    links: {
      live: "https://food-del-application.netlify.app/",
      github: "https://github.com/Srisajeenthran/Food-del-app.git",
    },
  },
  {
    tag: "MERN",
    title: "Hotel Management System",
    description:
      "End-to-end hotel management suite with admin and customer portals, room reservations, employee management, payroll, event handling, and secure multi-service APIs powered by Node.js and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Payments", "JWT"],
    glow: "from-purple-600 via-fuchsia-500 to-pink-500",
    image: hotel_img,
    links: {
      live: "https://github.com/divey26/Hotel_Management_Syatem-master.git",
      github: "https://github.com/divey26/Hotel_Management_Syatem-master.git",
    },
  },
];

const Projects = () => (
  <section id="projects" className="space-y-10">
    <SectionHeader
      eyebrow="Projects"
      title="Select work and research"
      description="AI-enabled recruitment, immersive e-commerce, social platforms, and logistics."
    />
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur transition-all duration-500"
        >
          {/* Gradient border effect on hover */}
          <div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
          />

          {/* Image section */}
          <div className="relative h-56 w-full overflow-hidden">
            <motion.img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onError={(event) => {
                if (event.currentTarget.dataset.fallbackApplied) return;
                event.currentTarget.dataset.fallbackApplied = "true";
                event.currentTarget.src = fallbackProjectImage;
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

            {/* Tag badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                <Code2 className="h-3 w-3" />
                {project.tag}
              </div>
            </div>

            {/* Decorative sparkle */}
            <div className="pointer-events-none absolute -right-6 -top-6 opacity-0 transition-opacity duration-500 group-hover:opacity-30">
              <Sparkles
                className={`h-32 w-32 bg-gradient-to-br ${project.glow} bg-clip-text text-transparent`}
                strokeWidth={1}
              />
            </div>
          </div>

          {/* Content section */}
          <div className="relative p-6">
            <h3 className="text-2xl font-display leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech, techIdx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.15 + techIdx * 0.05,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links?.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/60"
                >
                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                  Live Preview
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </motion.a>
              )}
              {project.links?.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <Github
                    size={14}
                    className="transition-transform duration-300 group-hover/btn:rotate-12"
                  />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
