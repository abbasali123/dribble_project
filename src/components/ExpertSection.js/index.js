import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const slides = [
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
];

function ExpertSection() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        background: "#0B0F17",
        height: "100vh",
        color: "white",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "50%", margin: "50px 30px" }}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide) => {
            const { description, image, subTitle, title } = slide || {};
            return (
              <SwiperSlide>
                <div
                  style={{
                    background: "#1f283d",
                    width: "700px",
                    height: "500px",
                    margin: "70px 10px 10px 80px",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <img
                      src={image}
                      alt={title}
                      style={{
                        width: "200px",
                        height: "400px",
                        objectFit: "cover",
                        margin: "50px",
                        borderRadius: "100px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginTop: 40,
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <h2>{title}</h2>
                    <p
                      style={{ margin: 0, fontSize: "12px", color: "#596D95" }}
                    >
                      {subTitle}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        textAlign: "left",
                        marginRight: 100,
                        color: "#B1B2B6",
                      }}
                    >
                      {description}
                    </p>

                    <div
                      style={{
                        color: "#070910",
                        background: "#83D8E8",
                        padding: "10px 40px",
                        margin: "50px 0 0px 30px",
                        fontSize: "12px",
                        borderRadius:"30px"
                      }}
                    >
                      Get a consultation
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div style={{ marginTop: 200, fontSize:"80px", padding:0, fontWeight:"lighter" }}> 
        <img src={"circle.png"} alt="circle"/> <span>Our</span>
        <p style={{ margin: "0 0 0 90px" }}>experts</p>
        <p style={{ margin: "0 0 0 90px" }}>say</p>
      </div>
    </div>
  );
}

export default ExpertSection;
