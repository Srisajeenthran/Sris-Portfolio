import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    label: "Email",
    value: "srisajeenthran00@gmail.com",
    href: "mailto:srisajeenthran00@gmail.com",
    icon: Mail,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    label: "GitHub",
    value: "github.com/Srisajeenthran",
    href: "https://github.com/Srisajeenthran",
    icon: Github,
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/srisajeenthran-sritharan",
    href: "https://www.linkedin.com/in/srisajeenthran-sritharan",
    icon: Linkedin,
    gradient: "from-blue-600 to-cyan-500"
  }
];

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const trimmed = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()])
    );

    if (Object.values(trimmed).some((value) => value === "")) {
      setStatus({
        type: "error",
        message: "Please fill in every field before sending."
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Email service is not configured. Please check your .env values."
        );
      }

      // Send to YOU (single template)
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmed.name,
          email: trimmed.email,
          subject: trimmed.subject,
          message: trimmed.message,
          to_email: "srisajeenthran00@gmail.com"
        },
        publicKey
      );

      // Optional: Auto-reply using same template (uncomment if you want)
      /*
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: "Srisajeenthran",
          email: "srisajeenthran00@gmail.com",
          subject: `Re: ${trimmed.subject}`,
          message: `Hi ${trimmed.name},

Thanks for reaching out through my portfolio. I’ve received your message and will reply soon.

Best regards,
Srisajeenthran`,
          to_email: trimmed.email
        },
        publicKey
      );
      */

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent."
      });
      setForm(initialFormState);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          error?.message ||
          "I couldn’t send that right now. Please email srisajeenthran00@gmail.com."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="space-y-10">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build together"
        description="Whether it’s intelligent HR tooling or immersive product experiences, I’m open to collaborate."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 backdrop-blur"
          onSubmit={handleSubmit}
        >
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 p-2 shadow-lg">
                <Send className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Send a message</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-500/50 focus:bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="text-sm text-slate-300">
                Email
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-500/50 focus:bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm text-slate-300">
              Subject
              <input
                type="text"
                placeholder="Project idea"
                value={form.subject}
                onChange={handleChange("subject")}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-500/50 focus:bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
            </label>

            <label className="mt-4 block text-sm text-slate-300">
              Message
              <textarea
                rows="5"
                placeholder="Tell me about your vision..."
                value={form.message}
                onChange={handleChange("message")}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-500/50 focus:bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
            </label>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 hover:shadow-xl hover:shadow-cyan-500/60"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <p>{status.message}</p>
              </motion.div>
            )}
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 backdrop-blur"
        >
          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 p-2 shadow-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Reach me directly</h3>
            </div>
            <p className="mb-6 text-slate-400">
              Prefer direct outreach? Drop an email or connect via GitHub / LinkedIn.
            </p>
            <ul className="space-y-3">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group/item flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      <div
                        className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} p-2.5 shadow-lg`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-white group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-blue-500 group-hover/item:via-cyan-400 group-hover/item:to-teal-400 group-hover/item:bg-clip-text">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
