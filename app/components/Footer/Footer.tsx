"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer mt-30">
      <div className="main-container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link className="belteleks-logo" href="/">
            <img className="pointer" src="./imgs/logo.png" />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="footer-columns"
        >
          <div className="footer-menu">
            <div className="footer-menu-list fs-16 fw-400">
              <h1 className="fs-16 fw-700 mb-15">О КОМПАНИИ</h1>
              <li>
                <Link href="/about">
                  <span>О нас</span>
                </Link>
              </li>
              <li>
                <Link href="/management">
                  <span>Руководство</span>
                </Link>
              </li>
              <li>
                <Link href="/shops">
                  <span>Магазины</span>
                </Link>
              </li>
            </div>
            <div className="footer-menu-list">
              <h1 className="fs-16 fw-700 mb-15">ИНФОРМАЦИЯ</h1>
              <li>
                <Link href="/news">
                  <span>Акционерам</span>
                </Link>
              </li>
              <li>
                <a className="pointer" href="https://president.gov.by/ru">
                  Сайт президента Республики Беларусь
                </a>
              </li>
              <li>
                <a>Противодействие коррупции</a>
              </li>
              <li>
                <Link href="/pamyatka-pokupatelyu">
                  <span>Памятка покупателю</span>
                </Link>
              </li>
              <li>
                <Link href="/rasshifrovka-abbreviatur">
                  <span>Расшифровка абревиатур</span>
                </Link>
              </li>
            </div>
          </div>
          <div className="footer-menu-contacts">
            <div>
            <div className="phonenumber-group">
              <img className="icon" src="./imgs/phone.png" />
              <a href="tel:+375291234567" className="first-number fs-18 fw-600">
                +375(29)1234567
              </a>
            </div>
            <div className="phonenumber-group">
              <img className="icon" src="./imgs/phone.png" />
              <a href="tel:+375291234567" className="second-number fs-18 fw-600">
                +375(29)1234567
              </a>
            </div>
            <div className="email fs-14 fw-600">Email: info@belteks.by</div>
            </div>
            <div className="phonenumber-group">
              
            </div>
            <div className="timetable fw-400">С 8:45 до 17:30 по будням</div>
          </div>
        </motion.div>
      </div>

      <div>

      </div>
    </div>
  );
}

export default Footer;
