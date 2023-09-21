import React from "react";
import "./service.scss";

function Services() {
  const services = [
    {
      image: "home.jpeg",
      title: "Home Insurance",
      width: "50%",
      height: "400px",
    },
    {
      image: "beachRing.jpeg",
      title: "",
      width: "20%",
      height: "400px",
      borderRadius: "85px",
    },
    {
      image: "",
      title: "",
      width: "30%",
      height: "300px",
    },
  ];
  const services2 = [
    {
      image: "vehicle.jpeg",
      title: "Vehicle Damage",
      width: "30%",
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
    <div className="container-choice">
      <div className="container-choice-top">
        {services.map((service) => {
          const { image, title, height, width, borderRadius } = service || {};
          if (image) {
            return (
              <div
                style={{
                  width: width,
                  height: "100%",
                  borderRadius: borderRadius ? borderRadius : "40px",
                  overflow: "hidden",
                }}
                className="img-box"
              >
                <img src={image} alt={title} />
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
            <div className="best-choice-box">
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
                  borderRadius: "30px",
                  width: "250px",
                }}
              >
                View all services
              </div>
            </div>
          );
        })}
      </div>
      <div className="container-choice-bottom">
        {services2.map((service2) => {
          const { image, title, height, width, borderRadius } = service2 || {};
          if (image) {
            return (
              <div
                className="img-box"
                style={{
                  borderRadius: borderRadius ? borderRadius : "40px",
                  overflow: "hidden",
                }}
              >
                <img src={image} alt={title} />
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
        })}
      </div>
    </div>
  );
}

export default Services;
