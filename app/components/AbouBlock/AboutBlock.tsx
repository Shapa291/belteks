"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { AboutBlockData } from "@/lib/data";
import dynamic from "next/dynamic";
import { motionConfig } from "@/lib/utils";

const FactCard = dynamic(() => import("./FactCard"), { ssr: false });

const AboutBlock = () => {
  const factCards = React.useMemo(() => {
    return AboutBlockData.map((el, index) => (
      <FactCard key={index} year={el.year} text={el.text} />
    ));
  }, []);

  return (
    <div className="about-block">
      <div className="main-container about-block-grid">
        <motion.div {...motionConfig.fadeInUp} className="brand-name">
          <span className="fw-800">О БЕЛ</span>ТЕКС
        </motion.div>
        <div>
          <motion.div {...motionConfig.fadeInUp} className="description mb-15">
            ОАО «Оптово-логистический центр «БелТекс» является крупнейшим
            поставщиком ведущих белорусских производителей легкой и текстильной
            промышленности для оптовой и розничной торговли.
          </motion.div>
          <div className="fact-cards">{factCards}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
