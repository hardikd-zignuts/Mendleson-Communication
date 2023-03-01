import React from "react";

const BorderBottom = ({ pw, cw, name, center }) => {
  const textCenter = center && "text-center";
  const borderDown = {
    display: "inline-flex",
    "align-items": "center",
    width: pw,
  };
  const borderThick = {
    display: "inline-block",
    width: cw,
    height: "7px",
    background: "#a9a9a9",
    "border-radius": "4px",
  };
  const borderThin = {
    display: "inline-block",
    height: "0px",
    border: "1px solid #a9a9a9",
    width: pw,
  };
  return (
    <>
      <div className={`${textCenter}`}>
        <div className="about-info-header_title">{name}</div>
        <div style={borderDown} className="border-down">
          <span style={borderThick} className="border-down-thick"></span>
          <span style={borderThin} className="border-down-thin"></span>
        </div>
      </div>
    </>
  );
};

export default BorderBottom;
