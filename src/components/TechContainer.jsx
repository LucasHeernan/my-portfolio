import React from "react";
import { motion } from "framer-motion";

export default function TechContainer({ children }) {

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    >
      { React.cloneElement(children) }
    </motion.div>
  );
}
