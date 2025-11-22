import { motion } from "framer-motion";
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Srisajeenthran",
    icon: Github,
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/srisajeenthran-sritharan",
    icon: Linkedin,
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    name: "Email",
    href: "mailto:srisajeenthran00@gmail.com",
    icon: Mail,
    gradient: "from-blue-500 to-cyan-500"
  }
];

const techStack = ["React", "Vite", "Tailwind CSS", "Framer Motion"];

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-gradient-to-b from-slate-950/50 to-slate-900/30 py-12 backdrop-blur">
    <div className="relative mx-auto max-w-6xl px-4">
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col items-center gap-6"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          <h3 className="text-lg font-semibold text-white">Connect with me</h3>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative flex items-center justify-center rounded-full bg-gradient-to-br ${social.gradient} p-3 shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                <Icon className="h-5 w-5 text-white" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-2 py-1 text-xs text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {social.name}
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 flex flex-wrap items-center justify-center gap-3"
      >
        <span className="text-xs text-slate-400">Built with</span>
        {techStack.map((tech, idx) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col items-center gap-2 text-center text-sm text-slate-400"
      >
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Srisajeenthran Sritharan</span>
          <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
        </div>
        <p className="text-xs text-slate-500">
          Crafted with passion and attention to detail
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;