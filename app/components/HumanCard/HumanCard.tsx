import React from "react";
import "./styles.css";
import { motion } from "motion/react";

function HumanCard({ job, name, phoneNumber, email, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3 + index / 5,
        ease: [0, 0.71, 0.2, 1.01],
      }}

      className="dark-green-text mb-30"
    >
      <h2 className="mb-5">{job}</h2>
      <h3 className="mb-10">{name}</h3>
      <div className="mt-10">телефон: <a className="pointer" href={`tel:${phoneNumber}`}>{phoneNumber}</a></div>
      <div>email: {email}</div>
    </motion.div>
  );
}

export default HumanCard;
