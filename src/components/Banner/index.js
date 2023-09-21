import React from "react";
import Points from "../Points";
import "./banner.scss";

function Banner() {
  return (
    <div className="Banner-section">
      <div className="heading-side-banner">
        <h1 className="main-heading">Darcy's Insurance products</h1>
        {/* <p style={{ margin: 0 }}>Darcy's</p>
        <p style={{ margin: 0 }}>Insurance</p>
        <p style={{ margin: 0 }}>products</p> */}
      </div>
      <div className="right-side-banner">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // marginTop: 100,
            width: "50%",
            padding: "45px 0px",
          }}
        >
          <Points
            description={`<span>Our <span class="underline">plans<span> are saving policyholders 30% - 60% on premiums<span/>`}
          />
          <Points
            description={`We offer a choice of low dedactibles and include no cost value-added services.`}
          />
        </div>

        <div className="img-box">
          <img src="bannerBallon.jpg" height="700px" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
