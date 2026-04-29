import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  MessageSquare, 
  Mic, 
  ShieldCheck,
  Server,
  Cpu,
  Database,
  Globe
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import GlowContainer from "./GlowContainer.jsx";

const models = [
  {
    title: "Semantic Evaluator",
    engine: "Sentence-Transformers",
    model: "all-MiniLM-L6-v2",
    icon: BrainCircuit,
    desc: "Calculates precise 384-dimensional arrays for irrefutable Cosine Similarity Scoring, bypassing keyword dependency.",
    glow: "from-blue-500/80 to-purple-500/80"
  },
  {
    title: "Generative Engine",
    engine: "OpenAI API",
    model: "gpt-3.5-turbo",
    icon: MessageSquare,
    desc: "Synthesizes custom interview modules dynamically and formulates highly precise feedback geared toward correcting deltas.",
    glow: "from-emerald-500/80 to-teal-500/80"
  },
  {
    title: "Audio Engine",
    engine: "OpenAI Whisper API",
    model: "whisper-1",
    icon: Mic,
    desc: "Provides high-fidelity transcription processing WebRTC audio natively, avoiding UI stalling with dense parameters.",
    glow: "from-rose-500/80 to-orange-500/80"
  },
  {
    title: "Analytical Framework",
    engine: "NumPy & Scikit-learn",
    model: "Stylistic Variance",
    icon: ShieldCheck,
    desc: "Processes complex array distances and mathematical logic gates. Flags erratic syntactical jumps signaling fraud.",
    glow: "from-amber-500/80 to-yellow-500/80"
  }
];

const Research = () => {
  return (
    <section id="research" className="relative space-y-16 py-20">
      <SectionHeader
        eyebrow="ACADEMIC INVESTIGATION"
        title="Dynamic Interview Architecture"
        description="Core architecture principles and ML decision charting for the Smart HR Analytics Platform v2.0 AI subsystem."
      />

      {/* Tech Stack Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4 px-4"
      >
        {["React 19", "Node.js", "Python 3.x", "Flask", "OpenAI GPT-3.5", "Whisper-1"].map((tech, i) => (
          <span key={i} className="rounded-full border border-border/50 bg-card/40 px-4 py-2 text-xs font-bold tracking-wider text-muted-foreground backdrop-blur-md">
            {tech}
          </span>
        ))}
      </motion.div>

      {/* ML Models Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {models.map((item, index) => {
          const Icon = item.icon;
          return (
            <GlowContainer 
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border-2 border-border/10 bg-card transition-all duration-700 hover:border-primary/20"
            >
              <div className="relative flex h-full flex-col gap-6 bg-background/50 p-6 backdrop-blur-sm sm:p-8">
                {/* Header Profile */}
                <div className="flex items-start justify-between">
                  <div className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.glow} p-3 sm:p-4 shadow-xl`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      {item.engine}
                    </span>
                    <span className="mt-1 rounded-md bg-white/5 px-2 py-1 text-xs font-bold text-foreground ring-1 ring-white/10">
                      {item.model}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.glow} opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03]`} />
              </div>
            </GlowContainer>
          );
        })}
      </div>

      {/* System Architecture Diagram Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-16 w-full max-w-5xl mx-auto"
      >
        <GlowContainer className="relative overflow-hidden rounded-[2.5rem] border-2 border-border/10 bg-card transition-all duration-700 hover:border-primary/20">
          <div className="relative overflow-hidden bg-background/50 p-6 sm:p-12 backdrop-blur-xl">
            <div className="mb-10 text-center">
               <h3 className="text-2xl font-black text-foreground">System Architecture Blueprint</h3>
               <p className="mt-2 text-sm text-muted-foreground">Data Flow & Logic within the Microservice Pipeline</p>
            </div>

            {/* Visual Flow Representation */}
            <div className="relative mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-0">
               
               {/* Desktop Connection Lines - Background Level */}
               <div className="hidden lg:block absolute top-[2rem] left-[16.66%] right-[16.66%] h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-emerald-500/50 z-0" />

               {/* Client Layer */}
               <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-md">
                     <Globe className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="mt-6 text-center">
                    <span className="block text-sm font-black text-foreground whitespace-nowrap">Presentation Layer</span>
                    <span className="mt-2 block text-[10px] uppercase text-muted-foreground whitespace-nowrap">React Native / WebRTC</span>
                  </div>
                  
                  {/* Mobile Badge & Connector */}
                  <div className="lg:hidden flex flex-col items-center mt-6">
                     <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />
                     <div className="rounded-full border border-border bg-card/80 px-3 py-1 text-[10px] font-bold text-muted-foreground whitespace-nowrap z-20 my-2">
                        REST / WSS
                     </div>
                     <div className="h-8 w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-500/0" />
                  </div>
               </div>

               {/* Desktop Badge 1 */}
               <div className="hidden lg:flex absolute top-[2rem] left-[33.33%] -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                 <div className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold text-muted-foreground whitespace-nowrap shadow-xl">
                    REST / WSS
                 </div>
               </div>

               {/* Gateway Layer */}
               <div className="relative z-10 flex flex-col items-center justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-md">
                     <Server className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="mt-6 text-center">
                    <span className="block text-sm font-black text-foreground whitespace-nowrap">API Gateway</span>
                    <span className="mt-2 block text-[10px] uppercase text-muted-foreground whitespace-nowrap">Express.js & Node</span>
                  </div>

                  {/* Mobile Badge & Connector */}
                  <div className="lg:hidden flex flex-col items-center mt-6">
                     <div className="h-8 w-0.5 bg-gradient-to-b from-purple-500/50 to-emerald-500/50" />
                     <div className="rounded-full border border-border bg-card/80 px-3 py-1 text-[10px] font-bold text-muted-foreground whitespace-nowrap z-20 my-2">
                        Subprocesses
                     </div>
                     <div className="h-8 w-0.5 bg-gradient-to-b from-emerald-500/50 to-purple-500/0" />
                  </div>
               </div>

               {/* Desktop Badge 2 */}
               <div className="hidden lg:flex absolute top-[2rem] left-[66.66%] -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                 <div className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold text-muted-foreground whitespace-nowrap shadow-xl">
                    Subprocesses
                 </div>
               </div>

               {/* AI Pipeline Layer */}
               <div className="relative z-10 flex flex-col items-center justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur-md">
                     <Database className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="mt-6 text-center">
                    <span className="block text-sm font-black text-foreground whitespace-nowrap">AI Microservices</span>
                    <span className="mt-2 block text-[10px] uppercase text-muted-foreground whitespace-nowrap">Flask Pipeline (MasterAPI)</span>
                  </div>
               </div>

            </div>

          </div>
        </GlowContainer>
      </motion.div>
    </section>
  );
};

export default Research;
