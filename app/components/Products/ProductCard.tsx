"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

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
      >
        <Image
          src={imgPtah}
          alt="Фон карточки"
          layout="fill" 
           style={{ objectFit: "cover" }} 
          quality={100}
        />
        <div className="content">
          <div className="product-card-text">{text}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
