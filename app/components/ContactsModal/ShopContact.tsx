import React from "react";
import "./styles.css";
import { motion } from "motion/react";

function ShopContact({ index, name, addres, number, email }) {
  const transition = {
    duration: 0.8,
    delay: 0.3 + index / 5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
      className="shop-contacts mb-15 dark-green-text"
    >
      <h1 className="fs-20 7w-400">{name}</h1>
      <div className="fs-16 fw-400">{addres}</div>
      <div className="fs-16 fw-400">
        телефон:{" "}
        <a className="pointer" href={`tel:${number}`}>
          {number}
        </a>
      </div>
      <div className="fs-116 fw-400">email: {email}</div>
    </motion.div>
  );
}

export default ShopContact;
