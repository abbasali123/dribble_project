import React from "react";

function FundPoints({ description }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
      <div><img src='circle.svg' height="55px"/></div>
      <p style={{ margin:"20px 0 40px 5px" }} dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
}

export default FundPoints;
