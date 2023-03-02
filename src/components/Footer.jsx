import React from "react";
import facebook from "../assets/img/facebook 1.svg";
import linkedin from "../assets/img/linkedin 1.svg";
import google from "../assets/img/Google.svg";
const Footer = () => {
  return (
    <>
      <footer id="contact" className="footer">
        <div className="footer-head">
          <div className="footer-head-social">
            <div className="footer-head-social--title footer-primary-text">
              Social
            </div>
            <div className="footer-head-social--links">
              <img src={facebook} alt="social" />
              <span className="footer-sub-text"> Facebook</span>
            </div>
            <div className="footer-head-social--links">
              <img src={linkedin} alt="social" />
              <span className="footer-sub-text"> Linkedin</span>
            </div>
            <div className="footer-head-social--links">
              <img src={google} alt="social" />
              <span className="footer-sub-text"> Google +</span>
            </div>
          </div>
          <div className="footer-head-explore">
            <div className="footer-head-explore--title footer-primary-text">
              Explore
            </div>
            <div className="footer-sub-text">Services</div>
            <div className="footer-sub-text">Team</div>
            <div className="footer-sub-text">Clients</div>
          </div>
          <div className="footer-head-contact">
            <div className="footer-head-contact--title footer-primary-text">
              Contact
            </div>
            <div className="footer-sub-text">Lorem Ipsum dummy address</div>
            <div className="footer-sub-text">used for display</div>
            <div className="footer-sub-text">1234567890</div>
          </div>
          <div className="footer-head-email">
            <div className="footer-head-email--title footer-primary-text">
              Email
            </div>
            <div className="footer-sub-text">
              mendlesoncommunication@email.com
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; Copyright 2018 Mendleson Communication Pty Ltd
        </div>
      </footer>
    </>
  );
};
export default Footer;
