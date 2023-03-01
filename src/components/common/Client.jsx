import React from "react";
import BorderBottom from "../BorderBottom";
import ClientBox from "../page/ClientBox";

const Client = () => {
  return (
    <div id="client" className="client">
      <div className="client-header">
        <BorderBottom pw="310px" cw="104px" name="OUR CLIENTS" center={true} />
      </div>
      <div className="client-gallery">
        <ClientBox />
      </div>
    </div>
  );
};

export default Client;
