import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function ExpertSection() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        background: "#0B0F17",
        height: "100vh",
        color: "white",
        flexDirection:"row"
      }}
    >
      <div style={{ width:"50%", background:"red", margin:"50px 30px" }}>
        <Swiper
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        //   className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ExpertSection;
