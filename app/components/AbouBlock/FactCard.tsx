"use client";

import React from "react";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/motionConfig";

function FactCard({ year, text }) {
  return (
    <motion.div {...motionConfig.fadeInUp} className="fact-card">
      <div className="fw-700 fact-card-text-number">{year}</div>
      <div className="fw-600 fact-card-text-text">{text}</div>
    </motion.div>
  );
}

export default FactCard;
