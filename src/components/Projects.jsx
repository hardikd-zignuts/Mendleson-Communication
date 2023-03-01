import React from "react";
import BorderBottom from "./BorderBottom";
import Project1 from "../assets/img/Our Project_ 1 img 1.png";
import Project2 from "../assets/img/Our Project _ 2 img 1.png";
import Project3 from "../assets/img/Our Project_ 3 img 1.png";

const Projects = () => {
  return (
    <div id="project" className="project">
      <div className="project-header">
        <BorderBottom pw="362px" cw="103px" name="OUR PROJECTS" center={true} />
      </div>
      <div className="project-gallery">
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="mb-3 mb-lg-3 text-xl-end text-lg-center text-md-center">
              <img className="project-image" src={Project1} alt="project" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="col-xl-6 col-lg-12">
              <div className="mb-3 text-lg-center text-md-center">
                <img className="project-image" src={Project2} alt="project" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="mt-3 text-lg-center text-md-center">
                <img className="project-image" src={Project3} alt="project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
