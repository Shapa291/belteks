"use client";

import React from "react";
import "./styles.css";
import ShopElement from "./ShopElement";
import { motion } from "motion/react";
import { ShopsData } from "@/lib/data";

function Shops() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="fw-700 mb-30 dark-green-text main-container"
      >
        {" "}
        МАГАЗИНЫ
      </motion.div>
      <div className="cities-list">
        {ShopsData.map((el, index) => (
          <ShopElement key={index} cityName={el} />
        ))}
      </div>
    </div>
  );
}

export default Shops;
