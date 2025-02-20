import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/motionConfig";

interface HumanCardProps {
  job: string;
  name: string;
  phoneNumber: string;
  email: string;
  index: number;
}

function HumanCard({ job, name, phoneNumber, email, index }: HumanCardProps) {
  return (
    <motion.div
      {...motionConfig.slideInLeftWithDelay(index)}
      className="dark-green-text mb-30"
    >
      <h1 className="mb-5 fs-h1-name">{job}</h1>
      <h2 className="mb-10 fs-h2">{name}</h2>
      <div className="mt-10 fs-text">
        телефон:
        <a className="pointer" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
      </div>
      <div className="fs-text">email: {email}</div>
    </motion.div>
  );
}

export default HumanCard;
