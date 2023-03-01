import React from "react";
import client1 from "../../assets/img/clients/client-1280px-Brigitte-Logo.png";
import client2 from "../../assets/img/clients/client-BHP_2017_logo.png";
import client3 from "../../assets/img/clients/client-Layer 19.png";
import client4 from "../../assets/img/clients/client-Layer 20.png";
import client5 from "../../assets/img/clients/client-Layer 21.png";
import client6 from "../../assets/img/clients/client-Layer 22.png";
import client7 from "../../assets/img/clients/client-Layer 23.png";
import client8 from "../../assets/img/clients/client-Layer 24.png";
import client9 from "../../assets/img/clients/client-MelbourneWaterLogo-1024x282.png";

const ClientBox = () => {
  return (
    <>
      <div className="client-gallery-first">
        <img className="client-image" src={client3} alt="client" />
        <img className="client-image" src={client4} alt="client" />
        <img className="client-image" src={client1} alt="client" />
        <img className="client-image" src={client6} alt="client" />
        <img className="client-image" src={client2} alt="client" />
      </div>
      <div className="client-gallery-second">
        <img className="client-image" src={client5} alt="client" />
        <img className="client-image" src={client7} alt="client" />
        <img className="client-image" src={client8} alt="client" />
        <img className="client-image" src={client9} alt="client" />
      </div>
    </>
  );
};

export default ClientBox;
