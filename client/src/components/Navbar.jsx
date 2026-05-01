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
  Sun,
  Moon,
  BrainCircuit
} from "lucide-react";

const links = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Research", href: "#research", icon: BrainCircuit },
  { label: "Contact", href: "#contact", icon: Mail }
];

const Navbar = ({ theme, toggleTheme }) => {
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
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className={`sticky top-6 z-50 mx-auto w-full max-w-7xl rounded-3xl border-2 transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-card/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      } px-6 py-4`}
    >
      <div className="flex items-center justify-between">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-50" />
            <span className="relative flex items-center justify-center rounded-full bg-primary px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-primary/20">
              SS
            </span>
          </div>
          <span className="text-[10px] sm:text-sm font-black tracking-[0.1em] sm:tracking-widest text-foreground uppercase">
            Srisajeenthran
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
                aria-label={`Navigate to ${link.label} section`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{link.label}</span>
                <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-foreground transition-all hover:bg-card hover:shadow-lg"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative rounded-xl border border-border bg-card/50 p-2 text-foreground transition-all duration-300 hover:border-border/40 hover:bg-card lg:hidden"
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden border-t border-border pt-4 lg:hidden"
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
                    className="group flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-border/40 hover:bg-card hover:text-foreground"
                  >
                    <div className="flex items-center justify-center rounded-lg bg-primary/10 p-1.5">
                      <Icon className="h-4 w-4 text-primary" />
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