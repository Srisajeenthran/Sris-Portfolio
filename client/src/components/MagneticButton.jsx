import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MagneticButton = ({ children, distance = 40, stiffness = 150, damping = 15, mass = 0.1, className = "" }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness, damping, mass });
  const springY = useSpring(y, { stiffness, damping, mass });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (dist < distance * 2) {
      x.set(deltaX * 0.35);
      y.set(deltaY * 0.35);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
