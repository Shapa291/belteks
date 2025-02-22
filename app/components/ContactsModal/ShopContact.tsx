import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/utils";

interface ShopContactProps {
  index: number;
  name: string;
  addres: string;
  number: string;
  email: string;
}

function ShopContact({ index, name, addres, number, email }: ShopContactProps) {
  return (
    <motion.div
      {...motionConfig.slideInLeftWithDelay(index)}
      className="shop-contacts mb-15 dark-green-text"
    >
      <h1 className="fs-20 7w-400">{name}</h1>
      <div className="fs-16 fw-400">{addres}</div>
      <div className="fs-16 fw-400">
        телефон:
        <a className="pointer" href={`tel:${number}`}>
          {number}
        </a>
      </div>
      <div className="fs-116 fw-400">
        email:{" "}
        <a className="pointer" href={`email:${email}`}>
          {email}
        </a>
      </div>
    </motion.div>
  );
}

export default ShopContact;
