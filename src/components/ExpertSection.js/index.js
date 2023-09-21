import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./expertSection.scss";

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
    <div className="Expert-Container">
      <div className="swiper-box">
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
                <div className="swipper-inner-box ">
                  <div className="img-box">
                    <img src={image} alt={title} />
                  </div>

                  <div className="swiper-heading">
                    <h2>{title}</h2>
                    <p className="job-title">{subTitle}</p>
                    <p className="description">{description}</p>

                    <button className="GetNotificationBtn">
                      Get a consultation
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="heading-box">
        <img src={"circle.svg"} alt="circle" />

        <h3 className="heading">Our experts say</h3>
      </div>
    </div>
  );
}

export default ExpertSection;
