"use client";

import React from "react";
import "./styles.css";
import ProductCard from "./ProductCard";
import { motion } from "motion/react";
import { ProductsData } from "@/lib/data";

function Products() {
  return (
    <div className="main-container products">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="dark-green-text fs-h1 mb-30"
      >
        ПРОДУКЦИЯ
      </motion.h1>
      <div className="products-items">
        {ProductsData.map((el, index) => (
          <ProductCard key={index} text={el.name} imgPtah={el.img} />
        ))}
      </div>
    </div>
  );
}

export default Products;
