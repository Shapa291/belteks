"use client";

import React from "react";
import "./styles.css";

import HumanCard from "../components/HumanCard/HumanCard";
import { peopleContacts } from "@/lib/data";
import NavBread from "../components/NavBread/NavBread";

function Management() {
  return (
    <div className="main-container">
      <div className="wrapper"></div>
      <NavBread name="Руководство" />
      <div className="people-list">
        {peopleContacts.map((el, index) => (
          <HumanCard
            key={index}
            job={el.job}
            name={el.name}
            phoneNumber={el.phoneNumber}
            email={el.email}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Management;
