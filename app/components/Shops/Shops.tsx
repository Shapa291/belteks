"use client";

import React from "react";
import "./styles.css";
import ShopElement from "./ShopElement";
import { motion } from "motion/react";
import { ShopsData } from "@/lib/data";
import { motionConfig } from "@/lib/motionConfig";

function Shops() {
  return (
    <div>
      <motion.div
        {...motionConfig.fadeInUp}
        className="fw-700 mb-30 dark-green-text fs-h1 main-container"
      >
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
