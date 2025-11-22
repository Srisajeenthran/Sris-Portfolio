import { motion } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    borderGradient: "from-blue-500/50 to-cyan-500/50",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "Cloudscape Design"
    ]
  },
  {
    title: "Backend",
    icon: Database,
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    borderGradient: "from-blue-600/50 to-teal-500/50",
    items: [
      "Node.js & Express.js",
      "Java Spring Boot",
      "MongoDB · MySQL",
      "REST & GraphQL APIs"
    ]
  },
  {
    title: "AI / Tools",
    icon: Brain,
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    borderGradient: "from-blue-600/50 to-teal-500/50",
    items: [
      "LLMs (GPT, BERT)",
      "NLP & Bias Mitigation",
      "Python OpenCV",
      "Android (Java/Kotlin)",
      "Git · GitHub · Docker · Kubernetes",
      "Vite · Agile Delivery"
    ]
  }
];

const Skills = () => (
  <section id="skills" className="space-y-10">
    <SectionHeader
      eyebrow="Skills"
      title="Modern product engineering toolkit"
      description="A balanced stack across frontend craft, resilient backends, and AI/ML integrations."
    />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 backdrop-blur transition-all duration-300"
          >
            {/* Gradient border effect */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.borderGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
            />
            
            {/* Header with icon */}
            <div className="relative mb-6 flex items-center gap-3">
              <div
                className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} p-3 shadow-lg`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>
            </div>

            {/* Skills grid */}
            <div className="relative grid gap-3">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + itemIndex * 0.05
                  }}
                  whileHover={{ x: 4 }}
                  className="group/item flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                >
                  <CheckCircle2
                    className={`h-4 w-4 flex-shrink-0 text-transparent transition-colors duration-200 group-hover/item:text-green-400`}
                    strokeWidth={2.5}
                  />
                  <span className="text-sm font-medium text-slate-300 group-hover/item:text-white">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Decorative sparkle */}
            <div className="pointer-events-none absolute -right-4 -top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-30">
              <Sparkles
                className={`h-24 w-24 bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent`}
                strokeWidth={1}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Skills;