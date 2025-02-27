import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import Link from "next/link";
import { motionConfig } from "@/lib/utils";

interface NavBreadProps {
  name: string;
}

function NavBread({ name }: NavBreadProps) {
  return (
    <motion.div
      {...motionConfig.slideInLeftOnStart}
      className="news-nav-menu fw-400 fs-nav-bread  dark-green-text mb-30"
    >
      <Link className="dark-green-text pointer" href="\">
        Главная
      </Link>
      / <span className="fw-700">{name}</span>
    </motion.div>
  );
}

export default NavBread;
