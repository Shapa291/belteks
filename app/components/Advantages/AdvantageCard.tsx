"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/motionConfig";

interface AdvantageCardProps {
  icon: string;
  text: string;
}

function AdvantageCard({ icon, text }: AdvantageCardProps) {
  return (
    <motion.div {...motionConfig.fadeInUp} className="advantage-card">
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
