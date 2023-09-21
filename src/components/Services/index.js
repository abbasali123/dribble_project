import React from "react";

function Services() {
  const services = [
    {
      image: "home.jpeg",
      title: "Home Insurance",
      width: "500px",
      height: "400px",
    },
    {
      image: "beachRing.jpeg",
      title: "",
      width: "180px",
      height: "400px",
      borderRadius: "85px",
    },
    {
      image: "",
      title: "",
      width: "120px",
      height: "300px",
    },
    {
      image: "vehicle.jpeg",
      title: "Vehicle Damage",
      width: "300px",
      height: "300px",
    },
    {
      image: "mortgage.jpeg",
      title: "Mortgage Insurance",
      width: "300px",
      height: "300px",
    },
    {
      image: "pills.jpeg",
      title: "Medical Expense",
      width: "300px",
      height: "300px",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        background: "linear-gradient(#1f283d, #0B0F17)",
        height: "100vh",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin:"100px 0 40px 40px"
        }}
      >
        {services.map((service) => {
          const { image, title, height, width, borderRadius } = service || {};
          if (image) {
            return (
              <div
                style={{
                  position: "relative",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <img
                  src={image}
                  width={width}
                  height={height}
                  alt={title}
                  style={{
                    borderRadius: borderRadius ? borderRadius : "30px",
                    objectFit: "cover",
                  }}
                />
                {title && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      left: "16px",
                      background: "#0A0F17",
                      color: "white",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    {title}
                  </span>
                )}
              </div>
            );
          }

          return (
            <div
              style={{
                background: "#0C1E30",
                width: "300px",
                height: "370px",
                color: "white",
                borderRadius: "30px",
                position: "relative",
                textAlign: "center",
                padding:"20px"
              }}
            >
              <h1>Best Choice</h1>
              <p>
                Not all insurance are the same. That's why agency knows that
                your insurance should be customized to fit your situation.
              </p>

              <div
                style={{
                  background: "#FF6476",
                  padding: "10px 30px",
                  position: "absolute",
                  bottom: "15px",
                  left: "16px",
                  borderRadius:"30px",
                  width:"250px"
                }}
              >
                View all services
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
