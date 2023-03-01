import React from "react";
import { Row, Col } from "react-bootstrap";
import Vector from "../assets/img/Engagement vector 1.png";

const ServicesBox = () => {
  return (
    <>
    {/* <div className="servicesBox"> */}
      <Row>
        <Col>
          <div className="services-box-info">
            <div className="services-box-info--title">Engagement</div>
            <div className="services-box-info--text">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </div>
          </div>
        </Col>
        <Col>
          <img src={Vector} alt="vector" />
        </Col>
      </Row>
      {/* </div> */}
    </>
  );
};

export default ServicesBox;
