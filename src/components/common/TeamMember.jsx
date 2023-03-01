import React from "react";

const TeamMember = ({img,name}) => {
  return (
    <>
      <div className="team-member">
        <div className="team-member-img">
          <img src={img} alt="person" />
        </div>
        <div className="team-member-name">{name}</div>
      </div>
    </>
  );
};

export default TeamMember;
