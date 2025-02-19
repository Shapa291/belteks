"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";

function AdvantageCard({ icon, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="advantage-card"
    >
      <div className="content">
        <div className="advantage-icon">
          <img src={icon} />
        </div>
        <div className="advantage-text fw-700">{text}</div>
      </div>
    </motion.div>
  );
}

export default AdvantageCard;
