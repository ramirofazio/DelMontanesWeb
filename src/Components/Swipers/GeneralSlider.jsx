import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Styles from styled-components
import styled from "styled-components";

// Styles from swiper
import "swiper/css";
import "swiper/css/pagination";


// It receives the images through props as an array
function GeneralSlider({images}) {
    return (
        <SwiperContainer
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            effect={"fade"}
            slidesPerView={"auto"}
            loop={true}
            centeredSlides={true}
            spaceBetween={10}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination, Autoplay]}
        >
          {
            images.map((item, index) => 
                (
                <SwiperSlide style={{ width: "75%" }} key={index} >
                    <Image src={item}></Image>
                </SwiperSlide>
                )
            )
          }
        </SwiperContainer>
      );
  }
  
export default GeneralSlider;


const SwiperContainer = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;


const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;


