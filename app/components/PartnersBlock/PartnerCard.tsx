"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/motionConfig";

function PartnerCard({ img, text, partnerRef }) {
  return (
    <motion.div
      {...motionConfig.fadeInUp}
      className="partner-card mb-15 fw-400 fs-20"
    >
      <a className="pointer" href={partnerRef}>
        <img src={img} />
      </a>
      <div className="text_for-partners">{text}</div>
    </motion.div>
  );
}

export default PartnerCard;
