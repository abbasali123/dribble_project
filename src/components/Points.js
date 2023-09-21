import React from "react";

function Points({ description }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div className="circle-img">
        <img src="circle.png" height="55px" />
      </div>
      <p
        style={{ margin: "20px 0 80px 5px" }}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}

export default Points;
