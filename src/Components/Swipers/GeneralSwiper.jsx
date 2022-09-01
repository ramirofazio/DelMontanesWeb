import React from "react";
//Assets
import styled from "styled-components";
//SwiperJS
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

function GeneralSwiper({ images }) {
  return (
    <SwiperContainer
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      effect={"fade"}
      slidesPerView={"auto"}
      loop={true}
      centeredSlides={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((item, index) => (
        <SwiperSlide style={{ width: "75%" }} key={index}>
          <Image src={item} />
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
}

export default GeneralSwiper;

const SwiperContainer = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Image = styled.img`
  width: 100%;
  height: 90%;
  margin-top: 10%;
`;
