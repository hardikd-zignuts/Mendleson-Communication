import React from "react";
import { Row, Col } from "react-bootstrap";
// import Vector from "../assets/img/Engagement vector 1.png";

const ServicesBox = ({ title, text, img, order }) => {
  const orderText = order ? "order-xl-1" : "order-xl-2";
  const orderImg = order ? "order-xl-2" : "order-xl-1";
  return (
    <>
      <div className="box-main">
        <Row>
          <Col className={`${orderText} order-1`} xl={6} lg={12}>
            <div className="services-box-info">
              <div className="services-box-info--title">{title}</div>
              <div className="services-box-info--text">{text}</div>
            </div>
          </Col>
          <Col className={`${orderImg} order-2`} xl={6} lg={12}>
            <div className="service-box-image">
              <img src={img} alt="vector" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ServicesBox;
