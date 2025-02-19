import React from "react";
import "./styles.css";
import { motion } from "motion/react";

function ShopMapBlock(props) {
  return (
    <motion.div
    initial ={{opacity:0}}
    animate ={{opacity:1}}
    transition={{duration:2}}
    className="dark-green-text">
      <div>
        <h1 className="fs-30 fw-700 mb-15">{props.cityData.data.name}</h1>
        <div className="fs-24">
          <div className="mb-10">{props.cityData.data.adress}</div>
          <div  className="mb-10">{props.cityData.data.phoneNumber}</div>
          <div className="mb-10">{props.cityData.data.email}</div>
        </div>
        <div className="map-container">
          <a
            href={props.cityData.data.mapLinks.cityLink}
            className="map-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Минск
          </a>
          <a
            href={props.cityData.data.mapLinks.addressLink}
            className="map-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Улица Платонова, 32 — Яндекс Карты
          </a>
          <iframe
            src={props.cityData.data.mapLinks.iframeSrc}
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            className="map-iframe"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}

export default ShopMapBlock;
