import React from "react";
import about1 from "../assets/img/about us 1.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-image">
        <img src={about1} alt="about" />
      </div>
      <div className="about-info">
        <div className="about-info-title">ABOUT US</div>
        <div className="about-info-title-text">
          We love what we do and are driven by achieving great results for our
          clients. Our awards and impressive client list are testament to our
          high quality approach. We deliver value, creaKvity, results and
          excepKonal levels of customer service and professionalism. We
          specialise in infrastructure development, energy and natural
          resources.
        </div>
      </div>
    </div>
  );
};

export default About;
