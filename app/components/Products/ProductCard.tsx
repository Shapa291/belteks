"use client";

import React from "react";
import { motion } from "motion/react";

function ProductCard({ text, imgPtah }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
      className="product-card fs-30 fw-700"
    >
      <div
        className="product-card-back-image"
        style={{ backgroundImage: `url(${imgPtah})` }}
      >

      </div>
      <div className="product-card-text">{text}</div>
    </motion.div>
  );
}

export default ProductCard;
