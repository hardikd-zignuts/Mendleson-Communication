import React from "react";
import facebook from "../assets/img/facebook 1.svg";
import linkedin from "../assets/img/linkedin 1.svg";
import google from "../assets/img/Google.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-head">
          <div className="footer-head-social">
            <div className="footer-head-social--title">Social</div>
            <div className="footer-head-social--links">
              <img src={facebook} alt="social" />
              <span> Facebook</span>
            </div>
            <div className="footer-head-social--links">
              <img src={linkedin} alt="social" />
              <span> Linkedin</span>
            </div>
            <div className="footer-head-social--links">
              <img src={google} alt="social" />
              <span> Google +</span>
            </div>
          </div>
          <div className="footer-head-explore"></div>
          <div className="footer-head-contact"></div>
          <div className="footer-head-email"></div>
        </div>
        <div className="footer-bottom">
          &copy; Copyright 2018 Mendleson Communication Pty Ltd
        </div>
      </footer>
    </>
  );
};

export default Footer;
