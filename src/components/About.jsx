import React from "react";
import about1 from "../assets/img/about us 1.png";
import icon1 from "../assets/img/Enagagement icon 1.svg";
import icon2 from "../assets/img/coomunication icon 1.svg";
import BorderBottom from "./BorderBottom";

const About = () => {
  return (
    <div id="about" className="about flex-wrap">
      <div className="about-image">
        <img src={about1} alt="about" />
      </div>
      {/* Header Part  */}
      <div className="about-info">
        <div className="about-info-header">
          <div className="about-info-header_title">ABOUT US</div>
          <BorderBottom pw="238px" cw="156px" />
          <div className="about-info-header_text">
            We love what we do and are driven by achieving great results for our
            clients. Our awards and impressive client list are testament to our
            high quality approach. We deliver value, creativity, results and
            experiment levels of customer service and professionalism. We
            specialize in infrastructure development, energy and natural
            resources.
          </div>
        </div>
        {/* Bottom Part */}
        <div className="about-info-bottom">
          <div className="about-category">
            <img className="about-category-icon" src={icon1} alt="icon" />
            <div className="about-category-title">Engagement</div>
            <div className="about-category-text">
              We are engagement specialists, who have led projects at all levels
              of the IAP2 spectrum. READ MORE
            </div>
          </div>
          <div className="about-category">
            <img className="about-category-icon" src={icon2} alt="icon" />
            <div className="about-category-title">Communications</div>
            <div className="about-category-text">
              We are award-winning leaders in communications and campaign
              management. READ MORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
