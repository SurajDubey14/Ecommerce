import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../Swipper/styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./Images/slide1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./Images/slide2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./Images/slide3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./Images/slide4.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}