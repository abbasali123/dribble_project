import React from "react";
import FundPoints from "./FundPoints";
import "./fund.scss";

function Fund() {
  return (
    <div className="fundContainer">
      <div className="funding-box" style={{}}>
        <div className="heading-box">
          <h5 className="heading">
            Support at every<span className="Step_heading"> Step</span>
          </h5>
        </div>

        <div className="fundPoints-container">
          <FundPoints
            description={`
  <span>Participate in the <a href="#" style="color: #84d7e9">loyalty program</a>.</span>
    <span>
      Pay for the <br /> service online to get bonuses for our other <br />services.
    </span>
    <span>We have a lot of bonuses!</span>
  `}
          />
          <FundPoints
            description={`
            <span>You can help other people: choose a donation</span>
            <span><br/>fund and share the link with your friends!</span>
            
          `}
          />
          <button
            style={{
              width: "90%",
              height: "60px",
              borderRadius: "35px",
              cursor: "pointer",
              color: "#ff6476",
              fontSize: "25px",
              background: "#0B0F17",
              border: "1px solid #ff6476",
            }}
          >
            Choose a fund
          </button>
        </div>

        <div className="img-container">
          <img
            alt="bannerBallon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10rem",
            }}
            src="bannerBallon.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Fund;
