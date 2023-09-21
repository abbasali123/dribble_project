import React from "react";
import FundPoints from "./FundPoints";

function Fund() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        background: "#0B0F17",
        height: "75vh",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-between", // Corrected to "space-between"
          alignItems: "center", // Add this for vertical alignment
          width: "70%", // Adjust the width to your preference
        }}
      >
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <p style={{ margin: 0,fontSize: 80, fontWeight: "bolder", lineHeight: "1"  }}>Support</p>
          <p style={{ margin: 0,fontSize: 75, fontWeight: "bolder" , lineHeight: "1" }}>at every</p>
          <p style={{ margin: 0 ,fontSize: 135, fontWeight: "bolder", lineHeight: "1" }}>Step</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTopTop:'5px',
            
          }}
        >
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
          <button style={{
          width:'90%',
          height:'60px',
          borderRadius: "35px",
          cursor: "pointer",
          color: "#ff6476",
          fontSize:'25px',
          background: "#0B0F17",
          border: "1px solid #ff6476",

          }}>Choose a fund</button>
        </div>

        <div
        style={{
            width:'290px',
            height:'600px',
            borderRadius:'10rem',
            
        }}
        >
          <img alt="bannerBallon" style={{
            width:'100%',
            height:'100%',
            objectFit:'cover',
            borderRadius:'10rem',
          }} src="bannerBallon.jpg"  />
        </div>
      </div>
    </div>
  );
}

export default Fund;
