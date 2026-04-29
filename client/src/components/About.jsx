import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Target,
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import GlowContainer from "./GlowContainer.jsx";

const quickFacts = [
  {
    label: "Based in",
    value: "Colombo, Sri Lanka",
    icon: MapPin,
    gradient: "from-primary to-primary/60",
  },
  {
    label: "Education",
    value: "BSc (Hons) in IT – SLIIT",
    icon: GraduationCap,
    gradient: "from-primary/80 to-primary/40",
  },
  {
    label: "Opportunities",
    value: "Software engineering Associate & junior roles",
    icon: Briefcase,
    gradient: "from-primary to-primary/70",
  },
  {
    label: "Focus",
    value: "Full Stack · AI / ML",
    icon: Target,
    gradient: "from-primary/90 to-primary/50",
  },
];

const About = () => (
  <section id="about" className="relative py-20">
    {/* Decorative Background */}

    <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader
          eyebrow="ETHOS & DIRECTION"
          title="Treating Intelligence as a Craft"
          className="text-left"
        />
        <div className="mt-8 lg:mt-12 space-y-4 sm:space-y-6 text-lg sm:text-xl leading-relaxed text-muted-foreground md:text-xl">
          <p>
            I am a <span className="font-black text-foreground underline decoration-primary/30">Software Engineering student</span> at SLIIT, focusing on the future of work and human-AI collaboration.
          </p>
          <p>
            As part of a 4-member research team, we engineered the <span className="font-bold text-foreground">Smart HR Analytics Platform</span> a full-stack ecosystem combining AI microservices for resume screening, dynamic live interviews, and predictive employee retention.
          </p>
          <p>
            My specific contribution focuses on the <span className="italic font-black text-foreground underline decoration-primary/30">Dynamic Interview Architecture</span>, an exploration of ethical automation that leverages advanced LLMs to streamline recruitment while maintaining human empathy and scoring integrity.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 lg:mt-0"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {quickFacts.map((fact, idx) => (
            <GlowContainer
              key={fact.label}
              className="group relative overflow-hidden rounded-[2rem] border-2 border-border/10 bg-card transition-all duration-500 hover:border-primary/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${fact.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              />
              <div className="relative p-8">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${fact.gradient} shadow-lg`}
                >
                  <fact.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="mt-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  {fact.label}
                </h4>
                <p className="mt-2 text-xl font-black text-foreground leading-tight">
                  {fact.value}
                </p>
              </div>
            </GlowContainer>
          ))}
        </div>

        {/* Floating Accent */}
        <div className="mt-10 flex items-center gap-4 rounded-3xl border border-border bg-primary/10 p-6 backdrop-blur">
          
          <p className="text-sm border-l-2 border-primary pl-4 text-muted-foreground leading-relaxed"> 
            <span className="font-bold text-foreground">Active Focus:</span> Architecting the <span className="italic">Dynamic Interview Subsystem</span> with Python, WebRTC, and OpenAI's Whisper & GPT models.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
