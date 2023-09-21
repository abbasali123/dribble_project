import React from "react";
import Points from "../Points";

function Banner() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        background: "linear-gradient(#1f283d, #0B0F17)",
        height: "94vh",
        color: "white",
      }}
    >
      <div style={{ fontSize: 160, fontWeight: "bolder", marginTop:60 }}>
        <p style={{ margin: 0 }}>Darcy's</p>
        <p style={{ margin: 0 }}>Insurance</p>
        <p style={{ margin: 0 }}>products</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 100,
          width: 300,
        }}
      >
        <Points
          description={`<span>Our <span class="underline">plans<span> are saving policyholders 30% - 60% on premiums<span/>`}
        />
        <Points
          description={`We offer a choice of low dedactibles and include no cost value-added services.`}
        />
      </div>

      <div style={{ marginTop: 80,  }}>
        <img src="bannerBallon.jpg" height= "700px"/>
      </div>
    </div>
  );
}

export default Banner;
