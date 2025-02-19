"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import PartnerCard from "../components/PartnersBlock/PartnerCard";
import NavBread from "../components/NavBread/NavBread";
import { PartnersData } from "@/lib/data";



function AboutPage() {
  return (
    <div>
      <div className="dark-green-text main-container">
        <div className="wrapper"></div>
        {/* Навигационна надпись */}
        <NavBread name="О компании" />
        <div className="about-content">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="about-header mb-30 main-container fs-40 fw-700"
          >
            Об организации
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="about-text fw-400 fs-24 main-container"
          >
            ОАО «Оптово-логистический центр «БелТекс» является крупнейшим
            дилером по оптовой торговле тканями и текстильными изделиями.
            Продукция от ведущих белорусских производителей легкой и текстильной
            промышленности для оптовой и розничной торговли: постельное и
            столовое белье, махровые изделия, одеяла, пледы, подушки, покрывала,
            нитки швейные, пряжа, различные ткани и многое другое.
            <br />
            <br />
            Оптово-розничные склады ОАО «ОЛЦ «БелТекс» функционируют во всех
            шести регионах Республики Беларусь. Расположены склады в областных
            городах: Минск, Брест, Витебск, Могилев, Гомель, Гродно.
            <br />
            <br />
            На территории предприятия открыт магазин-склад по оптовой продаже
            товаров юридическим лицам, их обособленным подразделениям и
            индивидуальным предпринимателям за наличный расчет{" "}
            <span className="fw-700">
              (ТОЛЬКО ДЛЯ РЕЗИДЕНТОВ РЕСПУБЛИКИ БЕЛАРУСЬ)
            </span>
            .
          </motion.div>
        </div>
        <div className="main-container mt-30">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="dark-green-text fw-700 fs-40 mb-40"
          >
            Основные Партнёры
          </motion.h1>
          <div>
            {PartnersData.map((el, index) => (
              <PartnerCard key={index} img={el.img} text={el.describtion} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
