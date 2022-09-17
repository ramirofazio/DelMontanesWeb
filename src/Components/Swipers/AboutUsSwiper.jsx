import React from "react";
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Lazy } from "swiper";

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
        spaceBetween={0}
        allowTouchMove={false}
        loop={true}
        centeredSlides={true}
        lazy={true}
        modules={[Autoplay, Lazy]}
      >
        {images.map((item, index) => (
          <SwiperSlide
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "100%",
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
        lazy={true}
        modules={[Pagination, Autoplay, Lazy]}
      >
        {images.map((item, index) => (
          <SwiperSlide style={{ width: "100%" }} key={index}>
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
  width: 90%;
  height: 90%;
  border-radius: 15px;
  @media (${Variables.tabletL}) {
    height: 90%;
    width: 80%;
  }
  @media (${Variables.mobileL}) {
    width: 90%;
    height: 90%;
  }
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
