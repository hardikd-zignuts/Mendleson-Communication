import React from "react";
import BorderBottom from "../BorderBottom";
import ServicesBox from "../ServicesBox";
import ServiceData from "../../assets/data/ServiceData";

const Services = () => {
  return (
    <div id="services" className="services ">
      <div className="services-header">
        <BorderBottom pw="238px" cw="62px" name="SERVICES" center={true} />
      </div>

      <div className="box">
        {ServiceData.map((item) => {
          return <ServicesBox key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Services;
