import React, { useEffect, useState } from "react";
//Assets
import styled from "styled-components";
import Variables from "../../Styles/Variables";

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

function ImageSlyder({ images = [], autoPlayTime = 3000, ...props }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Wrapper {...props}>
      {images.map((imagesUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imagesUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            borderRadius: 20,
          }}
        ></Slide>
      ))}
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      ></Indicator>
    </Wrapper>
  );
}

export default ImageSlyder;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
  height: 50vh;
  width: 80%;
  border-radius: 20px;
  @media (max-width: 1024px) {
    height: 90%;
  }
  @media (${Variables.desktopXS}) {
    height: 30%;
  }
  @media (${Variables.tabletL}) {
    height: 90%;
    width: 80%;
  }
  @media (${Variables.mobileL}) {
    height: 90%;
  }
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;

const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  justify-content: center;
  width: 100%;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border: solid 3px white;
  border-radius: 20px;
  background-color: ${(props) => (props.isActive ? "white" : null)};
  margin: 5px;
`;
