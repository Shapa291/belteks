"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import Link from "next/link";

function ShopElement({ cityName }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="city-in-list fs-58 fw-600 dark-green-text"
    >
      <Link href="/shops">
        <div><span className="city">{cityName}</span></div>
        </Link>
    </motion.div>
  );
}

export default ShopElement;
