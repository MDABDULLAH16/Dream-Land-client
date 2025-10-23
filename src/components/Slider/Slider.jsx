 
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '/banner1.jpeg'
import banner2 from '/banner2.jpeg'
import banner3 from '/banner3.jpeg'
// Import Swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
      const progressCircle = useRef(null);
      const progressContent = useRef(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };
    return (
      <div className="h-svh">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide><img src={banner1} alt="banner1" /></SwiperSlide>
          <SwiperSlide><img src={banner2} alt="banner2" /></SwiperSlide>
          <SwiperSlide><img src={banner3} alt="banner3" /></SwiperSlide>
        
         
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    );
};

export default Slider;