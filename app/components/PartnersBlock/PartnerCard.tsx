"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/utils";
import Image from "next/image";

interface PartnerCardProps {
  img: string;
  text: string;
  partnerRef: string;
}

function PartnerCard({ img, text, partnerRef }: PartnerCardProps) {
  return (
    <motion.div
      {...motionConfig.fadeInUpWhileInView}
      className="partner-card mb-15 fw-400 fs-20"
    >
      <a className="pointer" href={partnerRef}>
        <Image alt="Логотип партнёра" height={1000} width={1000} src={img} />
      </a>
      <div className="text_for-partners">{text}</div>
    </motion.div>
  );
}

export default PartnerCard;
