import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  FolderKanban,
  Mail,
  Sparkles
} from "lucide-react";

const links = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Contact", href: "#contact", icon: Mail }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-4 z-50 rounded-2xl border transition-all duration-300 ${
        scrolled
          ? "border-white/20 bg-slate-900/80 shadow-lg shadow-blue-500/10"
          : "border-white/10 bg-slate-900/40"
      } px-4 py-3 backdrop-blur`}
    >
      <div className="flex items-center justify-between">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 blur-md opacity-50" />
            <span className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg">
              SS
            </span>
          </div>
          <span className="text-sm font-semibold tracking-wide text-slate-200">
            Portfolio
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 text-sm font-medium lg:flex">
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-slate-300 transition-colors duration-300 hover:text-white"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{link.label}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden border-t border-white/10 pt-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ x: 4 }}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 p-1.5">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <span>{link.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;