"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import Link from "next/link";
import ContactsModal from "../ContactsModal/ContactsModal";

function Header() {
  const [contactsOpen, setContactsOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="header"
    >
      <div className="main-container">
        <div className=" btns fs-24 fw-500">
          <Link className="logo fw-400 pointer" href="/">
            <span className="fw-700">БЕЛ</span>ТЕКС
          </Link>

          <div className="center-btns dark-green-text ">
            <div className="ref-btn pointer">
              <Link href="/about">
                <li>О компании</li>
              </Link>
            </div>
            <div className="ref-btn pointer">
              <Link href="/shops">
                <li>Региональные склады</li>
              </Link>
            </div>
          </div>
          <div
            onClick={() => setContactsOpen(!contactsOpen)}
            className="ref-btn contact pointer"
          >
            <li>Контакты</li>
          </div>
        </div>
      </div>
      {contactsOpen && (
        <ContactsModal status={contactsOpen} setStatus={setContactsOpen} />
      )}
    </motion.div>
  );
}

export default Header;
