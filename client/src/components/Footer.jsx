import { motion } from "framer-motion";
import {
  Heart,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Srisajeenthran",
    icon: Github,
    gradient: "from-primary to-primary/60"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/srisajeenthran-sritharan",
    icon: Linkedin,
    gradient: "from-primary/80 to-primary/40"
  },
  {
    name: "Email",
    href: "mailto:srisajeenthran00@gmail.com",
    icon: Mail,
    gradient: "from-primary/90 to-primary/50"
  }
];

const techStack = ["React", "Vite", "Tailwind CSS", "Framer Motion"];

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-card/30 pb-12 pt-24 backdrop-blur-xl">
    <div className="relative mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:items-end lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-7xl">
            Srisajeenthran <br /> Sritharan
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Digital Consciousness Active</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 space-y-12 lg:mt-0 lg:text-right"
      >
        <div className="space-y-4">
           <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Selected Architecture</p>
           <div className="flex flex-wrap gap-4 lg:justify-end">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {tech}
                </span>
              ))}
           </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-foreground font-black lg:justify-end">
             <span className="opacity-40">© {new Date().getFullYear()}</span>
             <Heart className="h-4 w-4 fill-primary text-primary" />
             <span>Treating Intelligence as a Craft</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/30">
            Handcrafted with precision & empathy — Sri Lanka
          </p>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default Footer;