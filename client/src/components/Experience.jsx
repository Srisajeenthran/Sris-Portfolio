import { useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  TrendingUp,
  ArrowRightCircle,
  ShieldCheck,
  Zap,
  Activity,
  X
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import GlowContainer from "./GlowContainer.jsx";

const roles = [
  {
    id: "uvexzon",
    company: "Uvexzon",
    role: "Software Engineering Intern",
    period: "May 2025 – Oct 2025",
    gradient: "from-blue-600 via-primary to-emerald-500",
    description: "Driving product reliability and full-stack innovation for enterprise-grade solution suites.",
    metrics: [
       { label: "Stability", value: "98%", desc: "Post-launch uptime" },
       { label: "Defects", value: "0", desc: "Critical regressions" },
       { label: "Velocity", value: "1.2x", desc: "Sprint efficiency" }
    ],
    bullets: [
      "Architected ship-ready UI/UX updates across massive front- and back-end codebases.",
      "Optimized performance and resolved complex architectural defects for high-traffic systems.",
      "Influenced sprint decisions and best practices within a high-speed agile environment.",
      "Engineered complex API integrations and database schema refinements for client scalability."
    ]
  },
  {
    id: "dgateway",
    company: "DGateway In",
    role: "Software Engineering Intern",
    period: "Mar 2024 – Jul 2024",
    gradient: "from-purple-600 via-primary to-blue-500",
    description: "Focused on banking-grade visualizations and resilient microservice architectures.",
    metrics: [
        { label: "Accuracy", value: "100%", desc: "KPI Data Sync" },
        { label: "Compliant", value: "ISO", desc: "Banking Standards" },
        { label: "Deployment", value: "K8s", desc: "Automated Pods" }
    ],
    bullets: [
      "Built a high-fidelity banking demo suite with React + Vite and micro-interaction focus.",
      "Integrated Grafana KPI dashboards for real-time operational visibility.",
      "Developed Spring Boot services with MongoDB and XLSX data processing pipelines.",
      "Orchestrated Docker/Kubernetes container module deployments for captive portal systems."
    ]
  }
];

const TechnicalAuditCard = ({ role, onClose }) => {
    const [isScanning, setIsScanning] = useState(true);

    useState(() => {
        const timer = setTimeout(() => setIsScanning(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute inset-x-2 bottom-2 z-40 rounded-[2.2rem] bg-zinc-950/95 border border-primary/30 p-8 shadow-2xl backdrop-blur-xl ring-1 ring-primary/20"
        >
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Live Technical Audit
                    </h4>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold mt-1 tracking-widest">Integrity Verification: SUCCESS</p>
                </div>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-zinc-500 transition-colors">
                    <X size={16} />
                </button>
            </div>

            {isScanning ? (
                <div className="py-10 flex flex-col items-center justify-center gap-4">
                    <div className="relative h-1 w-full bg-white/5 overflow-hidden rounded-full">
                        <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="h-full w-40 bg-primary"
                        />
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-primary animate-pulse">Analyzing Repositories...</span>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-3">
                    {role.metrics.map((m, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center"
                        >
                            <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">{m.label}</span>
                            <span className="block text-2xl font-black text-white leading-none">{m.value}</span>
                            <span className="block text-[8px] font-bold text-zinc-600 mt-2">{m.desc}</span>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

const ExperienceNode = () => (
    <div className="absolute left-4 md:left-1/2 top-10 z-30 -translate-x-1/2">
        <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
        >
            <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]" />
            <motion.div 
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute h-8 w-8 rounded-full border border-primary/50"
            />
            <motion.div 
                animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute h-8 w-8 rounded-full border border-primary/20"
            />
        </motion.div>
    </div>
);

const Experience = () => {
    const containerRef = useRef(null);
    const [activeAudit, setActiveAudit] = useState(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" ref={containerRef} className="relative py-32 overflow-hidden">
            <SectionHeader
                eyebrow="PROFESSIONAL RESIDENCY"
                title="Agile Engineering & Ownership"
                description="Immersive software engineering residencies at innovative firms, focusing on product reliability and scalable architectures."
            />

            <div className="relative mt-24 max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-20">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-white/5">
                    <motion.div
                        style={{ scaleY }}
                        className="absolute top-0 left-0 right-0 origin-top bg-gradient-to-b from-blue-500 via-primary to-emerald-500 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                    />
                </div>

                <div className="space-y-40">
                    {roles.map((role, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={role.company} className="relative group/card-wrapper">
                                <ExperienceNode />
                                
                                <div className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <GlowContainer className={`group relative ml-10 md:ml-0 w-[calc(100%-40px)] md:w-[46%] rounded-[3rem] border-2 border-white/5 bg-zinc-950 transition-all duration-700 hover:border-primary/30 shadow-2xl overflow-hidden`}>
                                        <AnimatePresence>
                                            {activeAudit === role.id && (
                                                <TechnicalAuditCard role={role} onClose={() => setActiveAudit(null)} />
                                            )}
                                        </AnimatePresence>
                                        
                                        <div className={`absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-br ${role.gradient} blur-[120px] opacity-10`} />
                                        
                                        <div className="relative z-10 flex flex-col gap-6 p-8 md:p-12">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">{role.period}</span>
                                                    <h3 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">{role.company}</h3>
                                                </div>
                                                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary">
                                                    <Briefcase size={24} />
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="h-px w-8 bg-primary" />
                                                <p className="text-lg font-black text-zinc-400 italic tracking-tight">{role.role}</p>
                                            </div>

                                            <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-md">
                                                {role.description}
                                            </p>

                                            <div className="mt-6 grid grid-cols-1 gap-4">
                                                {role.bullets.map((bullet, idx) => (
                                                    <motion.div 
                                                        key={idx}
                                                        initial={{ opacity: 0, x: isEven ? -10 : 10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="group/bullet flex items-start gap-4 rounded-2xl bg-white/[0.02] p-4 border border-white/5 transition-all hover:bg-white/[0.05] hover:border-white/10"
                                                    >
                                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover/bullet:bg-primary group-hover/bullet:text-white transition-colors">
                                                            <CheckCircle2 size={14} />
                                                        </div>
                                                        <p className="text-sm leading-relaxed text-zinc-400 group-hover/bullet:text-zinc-200 transition-colors">{bullet}</p>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                                <button 
                                                    onClick={() => setActiveAudit(role.id)}
                                                    className="group/audit flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary hover:border-primary transition-all duration-500"
                                                >
                                                    <ShieldCheck size={16} className="text-primary group-hover/audit:text-white transition-colors animate-pulse" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover/audit:text-white transition-colors">Performance Verified</span>
                                                </button>
                                                <ArrowRightCircle size={18} className="text-white/10 group-hover:text-primary transition-colors" />
                                            </div>
                                        </div>
                                    </GlowContainer>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;