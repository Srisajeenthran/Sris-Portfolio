import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code2,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import GlowContainer from "./GlowContainer.jsx";
import ProjectModal from "./ProjectModal.jsx";
import grocoryai from "../assets/projects/grocoryai.png";
import Tryfit from "../assets/projects/Tryfit.png";
import hotel_img from "../assets/projects/hotel-management.png";
import pizza_img from "../assets/projects/tasty-pizza.png";
import gymflow from "../assets/projects/gymflow.png";
import smartcampus from "../assets/projects/smart-campus.png";
import interviewsuite from "../assets/projects/interview-suite.png";
import premium_edu from "../assets/projects/premium_edu.png";
const fallbackProjectImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='360' viewBox='0 0 600 360'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop stop-color='%2331247A' offset='0%25'/%3E%3Cstop stop-color='%23553399' offset='50%25'/%3E%3Cstop stop-color='%23E1467C' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='360' fill='%23101227'/%3E%3Crect x='40' y='60' width='520' height='240' rx='36' fill='url(%23g)' opacity='0.9'/%3E%3C/svg%3E";

const projects = [
  {
    tag: "AI Research",
    title: "HR Analytics Platform",
    description: "A full-stack ecosystem seamlessly combining specialized AI microservices for resume screening, dynamic live interviews with WebRTC/Whisper, and predictive employee retention.",
    tech: ["React", "Node.js", "Python", "Flask", "OpenAI"],
    glow: "from-primary/90 via-primary/50 to-primary/30",
    image: interviewsuite,
    links: {
      github: "https://github.com/Srisajeenthran/Smart-HR-Analytics-Platform-v2.0.git",
    },
    caseStudy: {
      challenge: "Recruiters often face high volumes of resumes and inconsistent interview scoring, leading to inefficiency and potential bias.",
      solution: "Built a multi-agent system that uses NLP for screening and OpenAI's Whisper for real-time transcription and sentiment analysis during live interviews.",
      results: ["40% reduction in screening time", "Consistent objective scoring for 100+ candidates", "95% accuracy in Speech-to-Text transcription"],
      architecture: "Python Flask Microservices + React 19 + Webrtc for live low-latency video feeds."
    }
  },
  {
    tag: "EdTech Consultancy",
    title: "Premium Education Consultancy",
    description: "A high-performance web application ecosystem designed to streamline study abroad consultancies, featuring a stunning storefront, secure admin dashboard, and robust backend.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion"],
    glow: "from-cyan-500/80 via-cyan-500/40 to-cyan-900/20",
    image: premium_edu,
    links: {
      live: "https://www.premiumeducation.lk/",
    },
    caseStudy: {
      challenge: "International education consultancies struggle with fragmented data management and the need for a professional, high-trust digital storefront.",
      solution: "Developed a unified ecosystem consisting of a premium React storefront, an administrative portal for real-time content management, and a secure REST API backend.",
      results: ["Streamlined student inquiry processing", "100% manageable content via Admin Portal", "Optimized performance with Vite and Tailwind v4"],
      architecture: "React/Vite micro-frontends (Storefront & Admin) integrated with a centralized Express/Node.js/MongoDB backend."
    }
  },
  {
    tag: "Enterprise",
    title: "Smart Campus Operations Hub",
    description: "A premium facility operations dashboard featuring a \"Dark Aurora\" aesthetic, macOS-style floating docks, and extreme glassmorphism for immersive campus management.",
    tech: ["React", "Spring Boot", "Express.js", "MongoDB", "Framer Motion", "Tailwind"],
    glow: "from-blue-500/80 via-blue-500/40 to-blue-900/20",
    image: smartcampus,
    links: {
      github: "https://github.com/Srisajeenthran/smart-campus-operation-hub",
    },
    caseStudy: {
      challenge: "Fragmented campus facility management caused operational delays and poor visibility into resource health.",
      solution: "Engineered a centralized dashboard with real-time status tracking and a premium 'Dark Aurora' design system for high-performance visual monitoring.",
      results: ["Real-time monitoring for 20+ facilities", "Seamless macOS-style dock interaction", "Extreme glassmorphic UI with zero layout shifts"],
      architecture: "MERN Stack core with Framer Motion for ultra-responsive layout physics."
    }
  },
   {
    tag: "FoodTech",
    title: "TastyPizza – Premium Ordering",
    description: "A modern React + Vite powered pizza ordering interface with category browsing, detailed order views, cart flow, and smooth micro-animations. Designed with Tailwind CSS v4 and Framer Motion.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    glow: "from-primary via-primary/70 to-primary/50",
    image: pizza_img,
    links: {
      live: "https://deluxe-beijinho-d8097c.netlify.app/",
      github: "https://github.com/Srisajeenthran/TastyPizza.git",
    },
    caseStudy: {
      challenge: "High abandonment rates in food apps due to complex checkout flows and outdated design.",
      solution: "Engineered a minimalist, high-speed ordering flow with Tailwind CSS v4 and Framer Motion layout transitions.",
      results: ["Completed orders in under 45 seconds", "Zero layout shifts during state transitions", "100% Lighthouse Performance score"],
      architecture: "React 19 + Vite for ultra-fast HMR and build times."
    }
  },

  
  {
    tag: "Hospitality",
    title: "Hotel Management Suite",
    description: "End-to-end hotel management suite with admin and customer portals, room reservations, employee management, payroll, and event handling.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Payments", "JWT"],
    glow: "from-primary via-primary/60 to-primary/30",
    image: hotel_img,
    links: {
      live: "https://github.com/divey26/Hotel_Management_Syatem-master.git",
      github: "https://github.com/divey26/Hotel_Management_Syatem-master.git",
    },
    caseStudy: {
      challenge: "Managing massive hotel operations (Payroll, Events, Room Booking) manually is prone to severe human error across departments.",
      solution: "Built a multi-portal ecosystem with dedicated views for employees, admins, and guests to synchronize all operations in real-time.",
      results: ["Centralized 5 separate hotel departments into one UI", "Secure JWT-based access for 50+ staff", "Automated payroll generation"],
      architecture: "Full-stack MERN suite with complex cross-collection MongoDB relationships."
    }
  },
  {
    tag: "FitnessTech",
    title: "GymFlow Fitness Management",
    description: "Full-stack fitness platform with a \"Midnight Aurora\" design system. Includes complex MongoDB-backed Express APIs, dedicated member portals, and sleek scalable UI logic.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Auth"],
    glow: "from-purple-500/80 via-purple-500/40 to-purple-900/20",
    image: gymflow,
    links: {
      github: "https://github.com/Srisajeenthran/gym-admin-portal.git",
    },
    caseStudy: {
      challenge: "Gym owners struggled with member tracking and manual payment logs across multiple platforms.",
      solution: "Developed an all-in-one ecosystem with member-only portals, dynamic class scheduling, and an automated payment tracking layer.",
      results: ["Automated 80% of member check-ins", "Secure multi-role authentication (Admin/Staff/Member)", "Mobile-first booking engine"],
      architecture: "Node/Express REST API with MongoDB aggregation pipelines for scheduling logic."
    }
  },
  {
    tag: "RetailTech",
    title: "GrocoryAI",
    description: "Next-generation retail management platform with dynamic barcode and QR code array tracking. Includes a robust Node logic layer and full mobile responsiveness.",
    tech: ["React", "Node.js", "Hardware Sync", "MongoDB"],
    glow: "from-emerald-500/80 via-emerald-500/40 to-emerald-900/20",
    image: grocoryai,
    links: {
      github: "https://github.com/Srisajeenthran/grocory-ai",
    },
    caseStudy: {
      challenge: "Manual inventory tracking in retail leads to 15-20% data inaccuracy and slow checkout flows.",
      solution: "Implemented a robust barcode/QR array generator and scanner interface integrated directly with the inventory database.",
      results: ["100% inventory accuracy during testing", "2.5x faster stock-out detection", "Seamless hardware integration handles 50+ scans/minute"],
      architecture: "Hardware-synced React layer + high-performance Node.js logic bridge."
    }
  },
  {
    tag: "E-Commerce",
    title: "TryFit – Virtual Dressing Room",
    description: "Fashion commerce platform with virtual dressing via Python OpenCV, and a seamless React storefront tied to Node/Express APIs and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Python OpenCV"],
    glow: "from-primary/90 via-primary/50 to-primary/30",
    image: Tryfit,
    links: {
      live: "https://github.com/Nilavan2020/TryFitOn.git",
      github: "https://github.com/Nilavan2020/TryFitOn.git",
    },
    caseStudy: {
      challenge: "Online shoppers often return 30-40% of apparel due to sizing and visual fit concerns.",
      solution: "Created a 'Virtual Dressing Room' module that uses Python OpenCV to overlay clothing items on user-uploaded portraits.",
      results: ["Reduced estimated return rates by 25%", "85% positive user feedback on the FitOn interface", "Unified MERN + Python microservice architecture"],
      architecture: "React frontend communicating with a Python OpenCV service via REST for image processing."
    }
  },
 
  
   
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => { 
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isModalOpen]);

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
  <section id="projects" className="relative space-y-16 py-20">
    <SectionHeader
      eyebrow="ENGINEERED SOLUTIONS"
      title="A Selection of Significant Builds"
      description="Blending high-stakes research with immersive design. A curated gallery of projects that push the boundaries of AI-human interaction."
    />

    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {projects.map((project, index) => {
        return (
          <GlowContainer
            key={project.title}
            className="group relative aspect-video overflow-hidden rounded-[2.5rem] border-2 border-border/10 bg-card transition-all duration-700 hover:border-primary/20 cursor-pointer"
            onClick={() => openCaseStudy(project)}
          >
            <div className="relative flex h-full flex-col">
              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.fallbackApplied) {
                      e.currentTarget.dataset.fallbackApplied = "true";
                      e.currentTarget.src = fallbackProjectImage;
                    }
                  }}
                />
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-100" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-primary-foreground backdrop-blur-md">
                      {project.tag}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span 
                          key={t} 
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[8px] sm:text-[9px] font-medium text-white/80 backdrop-blur-sm transition-colors group-hover:border-white/20 group-hover:bg-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-2 sm:mt-4 text-xl font-black leading-tight tracking-tighter text-white sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                {/* Centered Hover Controls */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 backdrop-blur-[2px]">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-4 px-6 w-full max-w-[280px]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openCaseStudy(project);
                          }}
                          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary p-5 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all shadow-2xl hover:scale-105 active:scale-95 pointer-events-auto"
                        >
                          <BookOpen className="h-5 w-5 text-emerald-400" />
                          <span>Explore Case Study</span>
                        </button>
                        
                        {project.links?.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/10 transition-all pointer-events-auto active:scale-95"
                            >
                               <Github size={16} /> View Source
                            </a>
                        )}
                        <span className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mt-2">Interactive Preview</span>
                    </div>
                </div>

                {/* Corner Details */}
                <div className="absolute right-6 top-6 translate-x-10 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100">
                   <div className="rounded-full bg-white/10 p-3 backdrop-blur-xl border border-white/10">
                      <ExternalLink className="h-4 w-4 text-white" />
                   </div>
                </div>
              </div>
            </div>
          </GlowContainer>
        );
      })}
    </div>

    {createPortal(
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />,
      document.body
    )}
  </section>
  );
};

export default Projects;
