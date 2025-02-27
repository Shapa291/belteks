import React from "react";
import "./styles.css";
import ShopContact from "./ShopContact";
import { motion } from "motion/react";
import { contactData } from "@/lib/data";
import { motionConfig } from "@/lib/utils";

interface ContactsModalProps {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactsModal({ status, setStatus }: ContactsModalProps) {
  return (
    <div onClick={() => setStatus(!status)} className="modal-wrapper">
      <motion.div
        {...motionConfig.scaleIn}
        onClick={(e) => e.stopPropagation()}
        className="modal-window"
      >
        <motion.div
          {...motionConfig.slideInLeftSmooth}
          className="modal-header fw-700 fs-20 dark-green-text mb-30"
        >
          <div>КОНТАКТЫ</div>
          <div className="back-btn pointer" onClick={() => setStatus(!status)}>
            НАЗАД
          </div>
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
