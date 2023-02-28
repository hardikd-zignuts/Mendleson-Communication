import React from "react";
import Assets1 from "../assets/img/Asset 1.png";
import Assets2 from "../assets/img/Asset 2.png";
import Assets3 from "../assets/img/Assets 3.png";
import Assets4 from "../assets/img/Assets 4.png";

const Vector = () => {
  return (
    <>
      <div id="vector">
        <img className="assets1" src={Assets1} alt="Assets1" />
        <img className="assets2" src={Assets2} alt="Assets1" />
        {/* <img className="assets3" src={Assets3} alt="assets3" />
        <img className="assets4" src={Assets4} alt="assets4" /> */}
      </div>
    </>
  );
};

export default Vector;
