"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/motionConfig";
import Image from "next/image";

interface AdvantageCardProps {
  icon: string;
  text: string;
}

function AdvantageCard({ icon, text }: AdvantageCardProps) {
  return (
    <motion.div {...motionConfig.fadeInUp} className="advantage-card">
      <div className="content">
        <div className="advantage-icon">
          <Image src={icon} alt="логотип" height={100} width={100}/>

        </div>
        <div className="advantage-text fw-700">{text}</div>
      </div>
    </motion.div>
  );
}

export default AdvantageCard;
