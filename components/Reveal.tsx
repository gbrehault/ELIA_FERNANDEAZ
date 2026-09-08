"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.2, 1, 0.3, 1], // Custom cubic bezier for premium feel
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
