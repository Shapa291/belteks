"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import Link from "next/link";
import { motionConfig } from "@/lib/motionConfig";

function ShopElement({ cityName }) {
  return (
    <motion.div
      {...motionConfig.fadeInUp}
      className="city-in-list fw-600 dark-green-text"
    >
      <Link href="/shops">
        <div>
          <span className="city">{cityName}</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default ShopElement;
