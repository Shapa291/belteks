"use client";

import React from "react";
import { motion } from "motion/react";

interface ProductCardProps {
  text: string;
  imgPtah: string;
}

function ProductCard({ text, imgPtah }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      className="product-card fs-30 fw-700"
    >
      <div
        className="card"
        style={{
          backgroundImage: `url(${imgPtah})`,
        }}
      >
        <div className="content">
          <div className="product-card-text">{text}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
