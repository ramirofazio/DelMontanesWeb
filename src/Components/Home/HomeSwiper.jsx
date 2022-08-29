import React from "react";
//CSS
import styled from "styled-components";
//import GlobalStyles from "../../Styles/GlobalStyles";
//import Variables from "../../Styles/Variables";
//Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
//Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { images } from "../../Assets/Pics/HomeSwiper/index";

function HomeSwiper() {
  return (
    <StyledSwiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      loop={true}
      centeredSlides={true}
      spaceBetween={10}
      pagination={{ clickable: true, dynamicBullets: true }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((img, index) => (
        <SwiperSlide style={{ width: "75%" }} key={index}>
          <StyledImg src={img}></StyledImg>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

export default HomeSwiper;

const StyledSwiper = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
