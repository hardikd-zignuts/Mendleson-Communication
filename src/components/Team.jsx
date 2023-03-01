import React from "react";
import BorderBottom from "./BorderBottom";
import TeamMember from "./common/TeamMember";
import Person1 from "../assets/img/Person 1 img 1.png";
import Person2 from "../assets/img/Person 2 img 1.png";
import Person3 from "../assets/img/Person 3 img 1.png";

const Team = () => {
  return (
    <div id="team" className="team">
      <div className="team-header">
        <BorderBottom pw="241px" cw="101px" name="OUR TEAM" center={true} />
      </div>
      <div className="team-bottom">
        <TeamMember img={Person1} name="Jessica D’suza" />
        <TeamMember img={Person2} name="Johny Williams" />
        <TeamMember img={Person3} name="Sanya R" />
      </div>
    </div>
  );
};

export default Team;
