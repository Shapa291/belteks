import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/utils";
import { footerData } from "@/lib/data";
interface CityData {
  city: string;
  data: {
    name: string;
    adress: string;
    phoneNumber: {
      dir: string;
      sales: string;
    };
    email: string;
    mapLinks: {
      cityLink: string;
      textileCompanyLink?: string | undefined;
      fabricStoreLink?: string | undefined;
      wholesaleStoreLink?: string | undefined;
      wholesaleCompanyLink?: string | undefined;
      beddingStoreLink?: string | undefined;
      addressLink?: string | undefined;
      iframeSrc: string;
    };
  };
}

type ShopMapBlockProps = {
  cityData: CityData;
};

function ShopMapBlock(props: ShopMapBlockProps) {
  return (
    <motion.div {...motionConfig.fadeIn} className="dark-green-text">
      <div className="whole-body-shops">
        <h1 className="fs-h1-name fw-700 mb-15">{props.cityData.data.name}</h1>
        <div className="fs-text">
          <div className="mb-10">{props.cityData.data.adress}</div>
          <div className="mb-10">
            <div>
              Приемная:
              <a  className="pointer" href={`tel:${props.cityData.data.phoneNumber.dir}`}>
                {props.cityData.data.phoneNumber.dir}
              </a>
            </div>
            <div>
              Торговый отдел:{" "}
              <a className="pointer" href={`tel:${props.cityData.data.phoneNumber.sales}`}>
                {props.cityData.data.phoneNumber.sales}
              </a>
            </div>
          </div>
          <div className="mb-10">email: <a className="pointer" href={`email:${props.cityData.data.email}`}>{props.cityData.data.email}</a></div>
          <div className="mb-10">
            График работы: {footerData.timeOfWork.fullDay} <br />{" "}
            {footerData.timeOfWork.shortDay}
          </div>
        </div>
        <div className="map-container">
          {props.cityData.data.mapLinks.cityLink && (
            <a
              href={props.cityData.data.mapLinks.cityLink}
              className="map-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Минск
            </a>
          )}
          {props.cityData.data.mapLinks.addressLink && (
            <a
              href={props.cityData.data.mapLinks.addressLink}
              className="map-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Улица Платонова, 32 — Яндекс Карты
            </a>
          )}
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
