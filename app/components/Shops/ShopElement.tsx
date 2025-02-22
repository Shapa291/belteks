"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import Link from "next/link";
import { motionConfig } from "@/lib/utils";

interface ShopElementProps {
  cityName: string;
}

function ShopElement({ cityName }: ShopElementProps) {
  return (
    <Link href="/shops">
      <motion.div
        {...motionConfig.fadeInUp}
        className="city-in-list fw-600 dark-green-text"
      >
        <div>
          <span className="city fs-h1-name">{cityName}</span>{" "}
        </div>
      </motion.div>
    </Link>
  );
}

export default ShopElement;
