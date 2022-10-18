import React from "react";
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import { images } from "../../Assets/Pics/HomeSwiper/index";
import TimeLine from "./AboutUsTimeLine";
import Footer from "../Footer/Footer";
import AboutUsCarrousel from "../Swipers/AboutUsSwiper";

function AboutUs() {
  return (
    <StyledContainer data-aos="zoom-out">
      <TitleContainer data-aos="fade-down">
        <Title>NUESTRA HISTORIA</Title>
        <Line></Line>
        <Description>Navegá clickeando o deslizando en cada año</Description>
      </TitleContainer>
      <AboutUsTimeLine>
        <TimeLineContainer data-aos="fade-right">
          <TimeLine />
        </TimeLineContainer>
        <CarrouselContainer data-aos="fade-left">
          <AboutUsCarrousel images={images} />
        </CarrouselContainer>
      </AboutUsTimeLine>
      <Footer />
    </StyledContainer>
  );
}

export default AboutUs;

const StyledContainer = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 10%;
  display: flex;
  background-color: ${Variables.baseColor};
  @media (max-width: 1024px) {
    padding-top: 15%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 30%;
  @media (${Variables.desktopXS}) {
    height: 30%;
  }
  @media (${Variables.tabletL}) {
    height: 30%;
  }
  @media (${Variables.mobileL}) {
    height: 40%;
  }
  @media (${Variables.mobileS}) {
    height: 50%;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  line-height: 20px;
  color: ${Variables.principalColor};
  font-family: ${Variables.secondaryFont};
  font-weight: normal;
  margin: 20px;
  @media (max-width: 1024px) {
    width: 50%;
    font-size: 50px;
    line-height: 50px;
  }
  @media (${Variables.desktopXS}) {
    line-height: 50px;
    width: 70%;
  }
  @media (${Variables.tabletL}) {
    line-height: 50px;
  }
  @media (${Variables.mobileL}) {
    line-height: 40px;
  }
  @media (${Variables.mobileS}) {
    line-height: 40px;
    font-size: 40px;
  }
`;

const Line = styled.div`
  width: 5%;
  border-bottom: solid #919191 3px;
  @media (${Variables.tabletL}) {
    width: 10%;
  }
  @media (${Variables.mobileL}) {
    width: 15%;
  }
`;

const Description = styled.h2`
  font-size: 20px;
  color: #919191;
  font-weight: 200;
  @media (${Variables.tabletL}) {
    font-size: 20px;
  }
  @media (${Variables.mobileL}) {
    font-size: 20px;
  }
  @media (${Variables.mobileS}) {
    font-size: 15px;
  }
`;

const AboutUsTimeLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 65vh;
  background-color: ${Variables.baseColor};
  @media (max-width: 1024px) {
    height: 50vh;
  }
  @media (${Variables.desktopXS}) {
    height: 30%;
    align-content: space-around;
  }
  @media (${Variables.tabletL}) {
    height: 100%;
    align-content: space-around;
  }
  @media (${Variables.mobileL}) {
    height: 70vh;
  }
`;

const TimeLineContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  height: 50vh;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (${Variables.desktopXS}) {
    height: 50vh;
    width: 100%;
  }
  @media (${Variables.tabletL}) {
    height: 35vh;
  }
  @media (${Variables.mobileL}) {
  }
`;

const CarrouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 90%;
  align-items: center;
  @media (max-width: 1024px) {
    height: 80%;
  }
  @media (${Variables.desktopXS}) {
    width: 100%;
    height: 30vh;
  }
  @media (${Variables.tabletL}) {
    height: 40vh;
    align-items: center;
  }
  @media (${Variables.mobileL}) {
    height: 30vh;
  }
  @media (${Variables.mobileS}) {
    height: 20vh;
  }
`;
