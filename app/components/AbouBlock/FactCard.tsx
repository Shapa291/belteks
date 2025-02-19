"use client";

import React from "react";
import { motion } from "motion/react";

function FactCard({ year, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration:0.5}}
      className="fact-card"
    >
      <div className="fw-700 fact-card-text-number">{year}</div>
      <div className="fw-600 fact-card-text-text">{text}</div>
    </motion.div>
  );
}

export default FactCard;
