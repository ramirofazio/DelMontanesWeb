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
import image1 from "../../Assets/Pics/IMG_7056.jpg";
import image2 from "../../Assets/Pics/IMG_2835-2.JPG";
import image3 from "../../Assets/Pics/IMG_2856-2.JPG";
import image4 from "../../Assets/Pics/IMG_2872-2.JPG";

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
      <SwiperSlide style={{ width: "75%" }}>
        <StyledImg src={image1}></StyledImg>
      </SwiperSlide>

      <SwiperSlide style={{ width: "75%" }}>
        <StyledImg src={image2}></StyledImg>
      </SwiperSlide>
      <SwiperSlide style={{ width: "75%" }}>
        <StyledImg src={image3}></StyledImg>
      </SwiperSlide>
      <SwiperSlide style={{ width: "75%" }}>
        <StyledImg src={image4}></StyledImg>
      </SwiperSlide>
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
