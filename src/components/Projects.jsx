import React from "react";
import BorderBottom from "./BorderBottom";
import Project2 from "../assets/img/Our Project _ 2 img 1.png";
import Project3 from "../assets/img/Our Project_ 3 img 1.png";
import City from "../assets/img/city.jpeg";

const Projects = () => {
  return (
    <div id="project" className="project">
      <div className="project-header">
        <BorderBottom pw="362px" cw="103px" name="OUR PROJECTS" center={true} />
      </div>
      <div className="project-gallery">
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="project1 project-body mb-3 mb-lg-3 text-xl-end text-lg-center text-md-center">
              <img className="project-image" src={City} alt="project" />
              <div id="p1" className="project-text">
                CITY <br />
                CONSTRUCTION
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="project2 project-body mb-3 text-lg-center text-md-center">
                <img className="project-image" src={Project2} alt="project" />
                <div id="p2" className="project-text">
                  BUSINESS <br />
                  ANALYSIS
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="project3 project-body mt-3 text-lg-center text-md-center">
                <img className="project-image" src={Project3} alt="project" />
                <div id="p3" className="project-text">
                  TECHNOLOGY <br />
                  TALK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
