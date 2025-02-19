"use client";

import React from "react";
import "./styles.css";
import FactCard from "./FactCard";
import { motion } from "motion/react";
import { AboutBlockData } from "@/lib/data";

const AboutBlock = () => {
  return (
    <div className="about-block">
      <div className="main-container about-block-grid">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="brand-name"
        >
          <span className="fw-800">О БЕЛ</span>ТЕКС
        </motion.div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="description mb-15"
          >
            ОАО «Оптово-логистический центр «БелТекс» является крупнейшим
            поставщиком  ведущих белорусских производителей легкой и текстильной
            промышленности для оптовой и розничной торговли.
          </motion.div>
          <div className="fact-cards">
            {AboutBlockData.map((el, index) => (
              <FactCard key={index} year={el.year} text={el.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
