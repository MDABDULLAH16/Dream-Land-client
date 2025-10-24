import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "/banner1.jpeg";
import banner2 from "/banner2.jpeg";
import banner3 from "/banner3.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="relative h-[50vh] lg:h-[88vh] w-full">
      {" "}
      {/* 🔹90% of viewport height */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          color:'#FFFFFF',
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            src={banner1}
            alt="banner1"
            className="h-full w-full object-cover  "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner2}
            alt="banner2"
            className="h-full w-full object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner3}
            alt="banner3"
            className="h-full w-full object-cover "
          />
        </SwiperSlide>

        {/* Autoplay progress indicator */}
        <div
          className="autoplay-progress absolute right-5 bottom-5 z-10 flex items-center justify-center"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span className="text-secondary border-secondary border-2 rounded-full   p-4 font-bold " ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
