"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import Link from "next/link";
import { motionConfig } from "@/lib/utils";
import { footerData } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();

  return (
    <div className="footer mt-30">
      <div className="main-container">
        <motion.div {...motionConfig.fadeInUp}>
          <div className="belteleks-logo">
            <Image
              width={1000}
              height={1000}
              alt="Логотип БелТекс"
              className="logo-footer pointer"
              src="/imgs/logo.png"
              onClick={() => router.push("/")}
            />
          </div>
        </motion.div>

        <motion.div {...motionConfig.fadeInUp} className="footer-columns">
          <div className="footer-menu fs-for-footer-li-element">
            <div className="footer-menu-list fw-400">
              <h1 className=" fw-700 fs-for-footer-li-element mb-15">
                О КОМПАНИИ
              </h1>
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
              <h1 className="fs-for-footer-li-element  fw-700 mb-15">
                ИНФОРМАЦИЯ
              </h1>
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
              {/* <li>
                <a>Противодействие коррупции</a>
              </li> */}
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
                <Image
                  alt="Логотип"
                  src="/imgs/phone.png"
                  width={19.5}
                  height={18.42}
                />
                <a
                  href={`tel:${footerData.numbers.dir}`}
                  className="first-number fs-for-footer-li-phone fw-600 pointer"
                >
                  {footerData.numbers.dir}
                </a>
              </div>
              <div className="phonenumber-group">
                <Image
                  alt="Логотип"
                  src="/imgs/phone.png"
                  width={19.5}
                  height={18.42}
                />
                <a
                  href={`tel:${footerData.numbers.sales}`}
                  className="second-number fs-for-footer-li-phone fw-600 pointer"
                >
                  {footerData.numbers.sales}
                </a>
              </div>
              <div className="email fs-for-footer-li-email fw-600">
                Email:{" "}
                <a className="pointer" href={`mailto:${footerData.email}`}>
                  {footerData.email}
                </a>
              </div>
            </div>
            <div className="phonenumber-group"></div>
            <div className="fs-for-footer-li-element  fw-400">
              <div className="mb-10">{footerData.timeOfWork.fullDay}</div>
              <div className="mb-10">{footerData.timeOfWork.shortDay}</div>
              <div className="mb-10">{footerData.timeOfWork.dayOff}</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div></div>
    </div>
  );
}

export default Footer;
