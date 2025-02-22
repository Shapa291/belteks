"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import NavBread from "../components/NavBread/NavBread";
import { motionConfig } from "@/lib/utils";

function RasshifrovkaAbbreviatur() {
  return (
    <div className="dark-green-text">
      <div className="wrapper"></div>
      <div className="main-container">
        {/* Навигационная надпись */}
        <NavBread name="Расшифровка абревиатур" />

        <div className="mt-30">
          <motion.div {...motionConfig.slideInLeft}>
            <h1 className="fw-700 fs-h1 mb-15">
              Буквенные обозначения отделок бытовых тканей:
            </h1>
            <div className="fs-text mb-30">
              М — механическое умягчение;
              <br />
              Х — химическое умягчение;
              <br />
              У — усадка ткани на тканеусадочной машине;
              <br />
              К — кисловка ткани щавелевой кислотой;
              <br />
              С — суровая ткань;
              <br />
              О — отделка с повышенной белизной;
              <br />
              Гл — гладкое крашение;
              <br />
              Цп — цифровая печать;
              <br />
              П — печать набивная;
              <br />
              Д — мыловка на джигере;
              <br />
              Б — беленая ткань;
              <br />
              э — ткань под заключительную отделку типа «джинс»;
              <br />
              a — ткань с «эффектом мятости» весом до 160 г/м2;
              <br />
              z — ткань с «эффектом мятости» весом свыше 160 г/м2;
              <br />
              пн. — станки Picanol, открытая кромка;
              <br />
              пн.1 — станки Picanol основа — белая, уток — крашеный;
              <br />
              пн.2 — станки Picanol основа и уток — крашеные;
              <br />
              пк. — станки Picanol, закрытая кромка;
              <br />
              2пн. — станки Picanol, открытая кромка;
              <br />
              л. — беление в жгуте;
              <br />
              з — ткань из импортного сырья
              <br />
            </div>
          </motion.div>
          <motion.div {...motionConfig.slideInLeft}>
            <h1 className="fw-700 fs-h1 mb-15">
              Буквенные обозначения упаковок в готовых изделиях:
            </h1>
            <div className="fs-text mb-30">
              уп. — упаковка ПВХ;
              <br />
              с.уп. — пакет из СПП;
              <br />
              с.кор. – сувенирная коробка;
              <br />
              п.р./с.уп. — печать растровая/ пакет из СПП;
              <br />
              п.р./уп.к. — печать растровая/ упаковка с крючком;
              <br />
              п.р. — печать растровая;
              <br />
              в./уп. — вышивка/ упаковка ПВХ;
              <br />
              п.р./р. — печать растровая/упаковка в рулик;
              <br />
              п.р./с.кор. — печать растровая/ сувенирная коробка;
              <br />
              п.р./ф.кор. — печать растровая/ фирменная коробка (крафт);
              <br />
              уп.к. — упаковка с крючком;
              <br />
              п.ф.кор. — фирменный пакет + фирменная коробка (крафт);
              <br />
              в./с.уп. — вышивка/ пакет из СПП;
              <br />
              л.с.уп. — лента + биоразлагаемая упаковка;
              <br />
              п.а.кор. — фирменный пакет + белая сувенирная упаковка;
              <br />
              п.р./п.ф.кор. — печать растровая/фирменный пакет + фирменная
              коробка (крафт);
              <br />
              в./п.а.кор. — вышивка/фирменный пакет + белая сувенирная упаковка;
              <br />
              уп.м. — упаковка в мешочек;
              <br />
              у.сум. — упаковка в сумку (ПВХ);
              <br />
              у./р. — умягченное изделие/ рулик;
              <br />
              п. — печать;
              <br />
              п/с.уп. — печать/пакет из СПП;
              <br />
              п./уп. — печать/упаковка ПВХ;
              <br />
              у./уп. — умягченное изделие/упаковка ПВХ;
              <br />
              у./л.с.уп. — умягченное изделие/лента + биоразлагаемая упаковка;
              <br />
              в./п.ф.кор. — вышивка/фирменный пакет + фирменная коробка (крафт);
              <br />
              в. — вышивка;
              <br />
              п.р./уп — печать растровая/упаковка ПВХ;
              <br />
              в./ф.кор. — вышивка/фирменная коробка (крафт).
              <br />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default RasshifrovkaAbbreviatur;
