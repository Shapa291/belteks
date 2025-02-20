import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/motionConfig";

function HumanCard({ job, name, phoneNumber, email, index }) {
  return (
    <motion.div
      {...motionConfig.slideInLeftWithDelay(index)}
      className="dark-green-text mb-30"
    >
      <h2 className="mb-5">{job}</h2>
      <h3 className="mb-10">{name}</h3>
      <div className="mt-10">
        телефон:{" "}
        <a className="pointer" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
      </div>
      <div>email: {email}</div>
    </motion.div>
  );
}

export default HumanCard;
