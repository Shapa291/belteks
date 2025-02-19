"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";

function PartnerCard({ img, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="partner-card mb-15 fw-400 fs-20"
    >
      <img src={img} />
      <div>{text}</div>
    </motion.div>
  );
}

export default PartnerCard;
