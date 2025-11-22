import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SectionHeader = ({ eyebrow, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="mb-10 flex flex-col gap-3 text-center"
  >
    {eyebrow && (
      <span className="mx-auto rounded-full bg-white/5 px-4 py-1 text-sm font-medium text-slate-300">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl font-display md:text-4xl">{title}</h2>
    {description && (
      <p className="text-base text-slate-400 md:text-lg">{description}</p>
    )}
  </motion.div>
);

SectionHeader.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default SectionHeader;