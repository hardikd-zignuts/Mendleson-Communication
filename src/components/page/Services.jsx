import React from "react";
import BorderBottom from "../BorderBottom";
import ServicesBox from "../ServicesBox";

const Services = () => {
  return (
    <div id="services" className="services ">
      <div className="services-header">
        <BorderBottom pw="238px" cw="62px" name="SERVICES" center={true} />
      </div>

      <div className="box">
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
