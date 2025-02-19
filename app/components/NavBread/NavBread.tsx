import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import Link from "next/link";

function NavBread({name}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="news-nav-menu fw-400 fs-16 dark-green-text mb-87"
    >
      <Link className="dark-green-text pointer" href="\">
        Главная
      </Link>
      / <span className="fw-700">{name}</span>
    </motion.div>
  );
}

export default NavBread;
