import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ArrowUpRight, Cpu, Target, CheckCircle2, Layers, Code2 } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Global Backdrop with Deep Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none border-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-7xl h-full md:h-[95vh] overflow-hidden rounded-none md:rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-[0_0_100px_rgba(0,0,0,1)] pointer-events-auto flex flex-col md:flex-row overscroll-none"
            >
              {/* Cinematic Aurora Background Background */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute -left-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute -right-[10%] -bottom-[10%] h-[50%] w-[50%] rounded-full bg-emerald-500/10 blur-[120px]" />
              </div>

              {/* Close Button - Premium Floating Style */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-50 rounded-full bg-white/5 p-3 text-white/50 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Visual Pillar (Left Sidebar) */}
              <div className="relative w-full md:w-[35%] h-[220px] md:h-full overflow-hidden shrink-0 scrollbar-hide">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale-[0.2] contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent md:hidden" />
                
                <div className="absolute bottom-10 left-10 right-10 space-y-4">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block rounded-full bg-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-lg"
                  >
                    {project.tag}
                  </motion.span>
                  <h2 className="text-4xl font-black tracking-tighter text-white leading-none">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Technical Experience Content (Right Area) */}
              <div 
                data-lenis-prevent
                className="relative z-10 flex-1 overflow-y-auto bg-transparent scrollbar-hide select-text overscroll-contain"
              >
                <div className="p-8 md:p-10 space-y-10">
                  {/* Technology Infrastructure */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-zinc-500">
                        <Code2 size={16} />
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Stack Architecture</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((t, i) => (
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            key={t} 
                            className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-[11px] font-bold text-zinc-300 uppercase tracking-tight hover:bg-white/10 transition-colors"
                        >
                            {t}
                        </motion.span>
                        ))}
                    </div>
                  </div>

                  {/* High-Impact Project Narrative */}
                  <div className="grid gap-12 lg:grid-cols-2">
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                                <Target size={20} />
                            </div>
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">The Challenge</h4>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                            {project.caseStudy.challenge}
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <Cpu size={20} />
                            </div>
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">The Solution</h4>
                        </div>
                        <p className="text-lg text-zinc-100 leading-relaxed font-bold italic">
                            "{project.caseStudy.solution}"
                        </p>
                    </section>
                  </div>

                  {/* Technical Depth & Metric Cards */}
                  <div className="grid gap-8 sm:grid-cols-2">
                    <section className="group space-y-4 rounded-[2rem] bg-white/[0.03] p-8 border border-white/10 hover:bg-white/[0.05] transition-all">
                      <div className="flex items-center gap-3 text-primary">
                        <Layers size={20} />
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Full Architecture</h4>
                      </div>
                      <p className="text-sm font-bold leading-relaxed text-zinc-500 uppercase">
                        {project.caseStudy.architecture}
                      </p>
                    </section>

                    <section className="group space-y-4 rounded-[2rem] bg-emerald-500/[0.03] p-8 border border-emerald-500/10 hover:bg-emerald-500/[0.05] transition-all">
                      <div className="flex items-center gap-3 text-emerald-400">
                        <CheckCircle2 size={20} />
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Key Metrics</h4>
                      </div>
                      <ul className="space-y-3">
                        {project.caseStudy.results.map((res, i) => (
                          <li key={i} className="flex items-start gap-3 text-[12px] font-bold text-zinc-300">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            {res}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  {/* Deployment Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-8 pt-10 border-t border-white/10">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex w-full sm:w-auto items-center justify-center gap-4 rounded-2xl bg-primary px-10 py-5 text-xs font-black tracking-[0.2em] text-white transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(var(--primary-rgb),0.3)]"
                      >
                         <span className="relative z-10">LAUNCH SYSTEM</span>
                         <ArrowUpRight size={20} className="relative z-10" />
                         <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 text-[11px] font-black tracking-[0.3em] text-zinc-500 hover:text-white transition-colors uppercase"
                      >
                         <Github size={24} /> <span>VIEW Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
