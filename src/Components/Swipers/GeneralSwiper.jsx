import React from "react";
//Assets
import styled from "styled-components";
import Variables from "../../Styles/Variables";
//SwiperJS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

function GeneralSwiper({ images }) {
  const width = window.innerWidth;

  if (width < 426) {
    return (
      <SwiperContainer
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        effect={"fade"}
        slidesPerView={"auto"}
        spaceBetween={0}
        allowTouchMove={false}
        loop={true}
        centeredSlides={true}
        modules={[Autoplay]}
      >
        {images.map((item, index) => (
          <SwiperSlide
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "50%",
            }}
            key={index}
          >
            <Image src={item} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    );
  } else {
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
  height: 100%;

  @media (${Variables.tabletL}) {
    height: 100%;
  }

  @media (${Variables.mobileL}) {
    width: 100%;
    height: 100%;
  }
`;
