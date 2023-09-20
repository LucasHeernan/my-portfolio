import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TechContainer({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    >
      { React.cloneElement(children, { isHovered: isHovered }) }
    </motion.div>
  );
}
