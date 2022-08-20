import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import styled from "styled-components";

import "swiper/css/pagination";
import "swiper/css";



function Slider({images}) {
    console.log(images);
    return (
        <SwiperContainer
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
          slidesPerView={"auto"}
          loop={false}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
        >
            {/* <SwiperSlide style={{ width: "75%" }}>
                <Image src={images[0]}></Image>
            </SwiperSlide>
            <SwiperSlide style={{ width: "75%" }}>
                <Image src={images[1]}></Image>
            </SwiperSlide>
            <SwiperSlide style={{ width: "75%" }}>
                <Image src={images[2]}></Image>
            </SwiperSlide> */}

          {
            images.map((item, index) => 
                (
                <SwiperSlide style={{ width: "75%" }} key={index}>
                    {console.log(item)}
                    <Image src={item}></Image>
                </SwiperSlide>
                )
            )
          }

        </SwiperContainer>
      );
  }
  
export default Slider;


const SwiperContainer = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  outline: 1px solid red;
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
`;

