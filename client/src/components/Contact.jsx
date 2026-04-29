import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import emailjs from "@emailjs/browser";
import GlowContainer from "./GlowContainer.jsx";
import MagneticButton from "./MagneticButton.jsx";

const contactInfo = [
  {
    label: "Email",
    value: "srisajeenthran00@gmail.com",
    href: "mailto:srisajeenthran00@gmail.com",
    icon: Mail,
    gradient: "from-primary to-primary/60"
  },
  {
    label: "GitHub",
    value: "github.com/Srisajeenthran",
    href: "https://github.com/Srisajeenthran",
    icon: Github,
    gradient: "from-primary/80 to-primary/40"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/srisajeenthran-sritharan",
    href: "https://www.linkedin.com/in/srisajeenthran-sritharan",
    icon: Linkedin,
    gradient: "from-primary/90 to-primary/50"
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
    <section id="contact" className="relative py-20">
      {/* Background Glow */}

      <SectionHeader
        eyebrow="SYNTHESIS & COLLABORATION"
        title="Let's Architect the Future"
        description="Whether it's discussing intelligent HR tooling or immersive product ecosystems, I'm open to meaningful collaboration."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <GlowContainer
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border-2 border-border/10 bg-card p-6 md:p-10 transition-all duration-700 hover:border-primary/20"
        >
          <form onSubmit={handleSubmit}>
          <div className="relative">
            <h3 className="text-3xl font-black tracking-tighter text-foreground sm:text-5xl">
              Send a message
            </h3>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Name</p>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-foreground placeholder:text-muted-foreground/30 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Email</p>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-foreground placeholder:text-muted-foreground/30 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Subject</p>
              <input
                type="text"
                placeholder="Project idea"
                value={form.subject}
                onChange={handleChange("subject")}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-foreground placeholder:text-muted-foreground/30 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Message</p>
              <textarea
                rows="5"
                placeholder="Tell me about your vision..."
                value={form.message}
                onChange={handleChange("message")}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-foreground placeholder:text-muted-foreground/30 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <MagneticButton className="w-full mt-10">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-primary py-5 text-lg font-black text-white transition-all hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                <Send className="h-5 w-5" />
              </motion.button>
            </MagneticButton>

            {status.message && (
              <p className={`mt-6 text-center text-sm font-bold ${status.type === "success" ? "text-emerald-500" : "text-rose-500"}`}>
                 {status.message}
              </p>
            )}
          </div>
          </form>
        </GlowContainer>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-10"
        >
          <div className="space-y-4 px-2">
            <h3 className="text-3xl font-black tracking-tighter text-foreground sm:text-5xl">Direct Channels</h3>
            <p className="max-w-md text-xl text-muted-foreground">
               I value meaningful connections. If you prefer a direct conversation, use the links below.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <GlowContainer
                key={item.label}
                className="group relative flex items-center gap-4 sm:gap-6 rounded-[2rem] border-2 border-border/10 bg-card p-4 sm:p-6 transition-all duration-500 hover:border-primary/20"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} 
                />
                
                <a
                  href={item.href}
                  className="relative z-10 flex items-center gap-4 sm:gap-6 w-full"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                     <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">{item.label}</p>
                     <p className="mt-1 text-sm xs:text-base sm:text-xl font-black text-foreground break-all leading-tight">
                       {item.value}
                     </p>
                  </div>
                </a>
              </GlowContainer>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
