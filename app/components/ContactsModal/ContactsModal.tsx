import React from "react";
import "./styles.css";
import ShopContact from "./ShopContact";
import { motion } from "motion/react";
import { contactData } from "@/lib/data";

function ContactsModal({ status, setStatus }) {
  return (
    <div onClick={() => setStatus(!status)} className="modal-wrapper">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: [0, 0.71, 0.2, 1.01] }}
        onClick={(e) => e.stopPropagation()}
        className="modal-window"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01], delay: 0.2 }}
          className="modal-header fw-700 fs-20 dark-green-text mb-30"
        >
          КОНТАКТЫ
        </motion.div>
        {contactData.map((el, index) => (
          <ShopContact
            key={index}
            index={index}
            name={el.name}
            addres={el.addres}
            number={el.number}
            email={el.email}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ContactsModal;
