import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Sparkles,
  TrendingUp
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const roles = [
  {
    company: "Uvexzon",
    role: "Software Engineering Intern",
    period: "May 2025 – Oct 2025",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    borderGradient: "from-blue-500/50 to-cyan-500/50",
    bullets: [
      "Contributed across front- and back-end codebases, ship-ready UI/UX updates, and responsive layouts.",
      "Diagnosed complex defects, researched fixes, and uplifted performance to keep client systems reliable.",
      "Actively joined sprint planning & code reviews, influencing design decisions and development best practices.",
      "Implemented API integrations, database improvements, and UX refinements for multiple client-facing products."
    ]
  },
  {
    company: "DGateway In",
    role: "Software Engineering Intern",
    period: "Mar 2024 – Jul 2024",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    borderGradient: "from-blue-600/50 to-teal-500/50",
    bullets: [
      "Built a React + Vite banking demo web app with polished Pure CSS styling and UX micro-interactions.",
      "Embedded Grafana dashboards for real-time visualizations and KPI monitoring.",
      "Developed Spring Boot + MongoDB services with XLSX export flows, API integrations, and resilient toast/snackbar feedback.",
      "Implemented captive portal modules, user registration flows, carousel content, and assisted Docker/Kubernetes deployments."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="space-y-10">
    <SectionHeader
      eyebrow="Experience"
      title="Internships with product ownership"
      description="Immersed in agile squads delivering enterprise-grade web platforms."
    />
    <div className="relative">
      {/* Timeline line with gradient */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600/50 via-cyan-500/50 to-teal-500/50" />
      
      <div className="space-y-12">
        {roles.map((role, index) => (
          <motion.div
            key={role.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative pl-20"
          >
            {/* Timeline dot with gradient */}
            <div className="absolute left-0 top-2 z-10">
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${role.gradient} blur-md opacity-60`}
                />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-br from-slate-900 to-slate-800">
                  <Briefcase className="h-4 w-4 text-blue-400" />
                </div>
              </div>
            </div>

            {/* Experience card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 backdrop-blur transition-all duration-300"
            >
              {/* Gradient border effect on hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${role.borderGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
              />

              {/* Header */}
              <div className="relative mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${role.gradient} p-2 shadow-lg`}
                    >
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {role.company}
                    </h3>
                  </div>
                  <p className="mt-1 text-lg font-display text-slate-200">
                    {role.role}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <span>{role.period}</span>
                </div>
              </div>

              {/* Bullet points */}
              <div className="relative mt-6 space-y-3">
                {role.bullets.map((bullet, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + idx * 0.1
                    }}
                    whileHover={{ x: 4 }}
                    className="group/item flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                    <p className="text-sm leading-relaxed text-slate-300 group-hover/item:text-white">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative element */}
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-0 transition-opacity duration-300 group-hover:opacity-20">
                <Sparkles
                  className={`h-32 w-32 bg-gradient-to-br ${role.gradient} bg-clip-text text-transparent`}
                  strokeWidth={1}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;