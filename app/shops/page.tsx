"use client";

import React from "react";
import "./styles.css";
import NavBread from "../components/NavBread/NavBread";
import { motion } from "motion/react";
import ShopMapBlock from "../components/ShopMapBlock/ShopMapBlock";
import { CitiesData } from "@/lib/data";

function Shops() {
  const [actvieStyle, setActiveStyle] = React.useState(0);

  React.useEffect(() => {}, [actvieStyle]);

  return (
    <div className="main-container dark-green-text">
      <div className="wrapper"></div>
      <NavBread name="Решиональные склады" />
      <div className="shops-top-text">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fs-32 fw-700 mb-30"
        >
          Наши реквизиты
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fs-24"
        >
          <span className="fw-700">
            ОАО «Оптово-логистический центр «БелТекс»
          </span>{" "}
          <br /> 220005, г. Минск, ул. Платонова, 32
          <br />
          <br />
          р/с №BY07 АКВВ 3012 0000 33847 510 0000 <br />
          в ЦБУ №510 ОАО «АСБ«Беларусбанк» <br />
          г. Минск, пр-кт Независимости,56, BIC SWIFT АКВВВY2Х <br />
          УНП 100230654 ОКПО 05881778 <br />
          В лице директора Платоновой Варвары Ивановны, действует на основании
          Устава
          <br /> <br />
          Тел./факс:{" "}
          <a className="pointer" href="tel:+375172702553">
            +375 (17) 270-25-53
          </a>{" "}
          /{" "}
          <a className="pointer" href="tel:+375172702394">
            +375 (17) 270-23-94
          </a>{" "}
          <br /> e-mail: info@belteks.by
        </motion.div>
        <div className="shops-list">
          <div>
            {CitiesData.map((el, index) => (
              <motion.div
                className={`${index == actvieStyle ? "active" : ""} btn fs-32`}
                onClick={() => setActiveStyle(index)}
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ delay: 0.5 + index / 10 }}
              >
                {el.city}
              </motion.div>
            ))}
          </div>
          <ShopMapBlock cityData={CitiesData[actvieStyle]} />
        </div>
      </div>
    </div>
  );
}

export default Shops;
