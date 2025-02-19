import React from "react";
import AdvantageCard from "./AdvantageCard";
import { AdvantagesData } from "@/lib/data";

function Advantages() {
  return (
    <div className="main-container">
      <div className="advantages-cards">
        {AdvantagesData.map((el, index) => (
          <AdvantageCard key={index} icon={el.icon} text={el.text} />
        ))}
      </div>
    </div>
  );
}

export default Advantages;
