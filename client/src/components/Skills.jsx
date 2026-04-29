import { motion } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Cpu,
  Globe,
  Layers,
  Terminal,
  Server
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import GlowContainer from "./GlowContainer.jsx";

const skillGroups = [
  {
    id: "frontend",
    title: "Visual Performance",
    subtitle: "Frontend Architecture",
    icon: Code,
    span: "md:col-span-7",
    gradient: "from-blue-500/20 via-primary/10 to-transparent",
    items: [
      "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", 
      "Tailwind CSS v4", "Redux Toolkit", "Framer Motion", "Material UI", 
      "Cloudscape Design", "Responsive Logic"
    ]
  },
  {
    id: "backend",
    title: "System Integrity",
    subtitle: "Backend & Data",
    icon: Database,
    span: "md:col-span-5",
    gradient: "from-purple-500/20 via-primary/10 to-transparent",
    items: ["Node.js", "Express", "Spring Boot", "MongoDB", "MySQL", "GraphQL"]
  },
  {
    id: "ai",
    title: "Neural Intelligence",
    subtitle: "AI & ML Frameworks",
    icon: Brain,
    span: "md:col-span-5",
    gradient: "from-emerald-500/20 via-primary/10 to-transparent",
    items: ["LLMs (GPT/BERT)", "NLP Pipelines", "Python OpenCV", "Vector DBs"]
  },
  {
    id: "tools",
    title: "Engineering Lifecycle",
    subtitle: "DevOps & Core Tools",
    icon: Terminal,
    span: "md:col-span-7",
    gradient: "from-orange-500/10 via-primary/5 to-transparent",
    items: [
      "Docker", "Kubernetes", "Git/GitHub", "Vite", "Agile Methodology", 
      "CI/CD Pipelines", "Linux Systems", "Unit Testing"
    ]
  }
];

const Skills = () => (
  <section id="skills" className="relative py-24 overflow-hidden">
    <SectionHeader
      eyebrow="TECHNICAL MASTERY"
      title="High-Performance Engineering Stack"
      description="An asymmetric toolkit curated for scalability, machine intelligence, and cinematic interaction design."
    />

    <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-12 max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-20">
      {skillGroups.map((group, index) => {
        return (
          <GlowContainer
            key={group.id}
            className={`group relative overflow-hidden rounded-[2.5rem] border-2 border-white/5 bg-zinc-950 transition-all duration-700 hover:border-primary/20 ${group.span}`}
          >
            {/* Background Aesthetic Blur */}
            <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${group.gradient} blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
            
            <div className="relative z-10 h-full flex flex-col p-8 md:p-12">
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <group.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">{group.subtitle}</p>
                    <h3 className="text-3xl font-black tracking-tighter text-white sm:text-4xl mt-1">
                      {group.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.03 }}
                    whileHover={{ 
                        scale: 1.08, 
                        y: -4,
                        boxShadow: "0 10px 25px -5px rgba(var(--primary-rgb), 0.2)"
                    }}
                    className="group/tag relative flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-center backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-primary/10"
                  >
                    <span className="text-[11px] font-black tracking-tight text-zinc-400 transition-colors group-hover/tag:text-white uppercase">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Infrastructure Graphic */}
              <div className="mt-auto pt-10 opacity-10 group-hover:opacity-20 transition-opacity select-none flex items-center gap-10">
                 <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-white" />
                    <div className="h-[1px] w-20 bg-gradient-to-r from-white to-transparent" />
                 </div>
                 <span className="text-[0.6rem] font-bold tracking-[0.5em] text-white uppercase">{group.id}_SYNODE_ACTIVE</span>
              </div>
            </div>

            {/* Subtle Grid Interaction Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </GlowContainer>
        );
      })}
    </div>
  </section>
);

export default Skills;