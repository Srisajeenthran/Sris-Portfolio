import { motion } from "framer-motion";

const RevealContainer = ({ children, className = "", delay = 0 }) => {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 40,
          scale: 0.95,
          filter: "blur(10px)"
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          scale: 1,
          filter: "blur(0px)"
        }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ 
          duration: 1.2, 
          delay: delay,
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealContainer;
