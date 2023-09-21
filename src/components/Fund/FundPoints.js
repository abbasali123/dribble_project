import React from "react";
import "./fund.scss";

function FundPoints({ description }) {
  return (
    <div className="fund-points-box">
      <div className="icon-box">
        <img src="circle.svg" className="circle-img" />
      </div>
      <p
        className="title-text"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}

export default FundPoints;
