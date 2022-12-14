import React from "react";
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import { images } from "../../Assets/Pics/HomeSwiper/index";
import TimeLine from "./AboutUsTimeLine";
import Footer from "../Footer/Footer";
import AboutUsCarrousel from "./AboutUsCarrousel";

function AboutUs() {
  return (
    <StyledContainer>
      <TitleContainer>
        <Title>NUESTRA HISTORIA</Title>
        <Line></Line>
        <Description>Navegá clickeando o deslizando en cada año</Description>
      </TitleContainer>
      <AboutUsTimeLine>
        <TimeLineContainer>
          <TimeLine />
        </TimeLineContainer>
        <CarrouselContainer>
          <AboutUsCarrousel images={images} />
        </CarrouselContainer>
      </AboutUsTimeLine>
      {/* <AboutUsItems>
        <Item>
        <ItemTitle>TITLE</ItemTitle>
        <ItemDescription>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Odio unde impedit at odit. Consequatur, 
          deleniti incidunt vel esse id quis eius. 
          Harum quis iste similique recusandae 
          veritatis porro accusantium? Est.</ItemDescription>
        </Item>
        <Item>
        <ItemTitle>TITLE</ItemTitle>
        <ItemDescription>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Odio unde impedit at odit. Consequatur, 
          deleniti incidunt vel esse id quis eius. 
          Harum quis iste similique recusandae 
          veritatis porro accusantium? Est.</ItemDescription>
        </Item>
        <Item>
        <ItemTitle>TITLE</ItemTitle>
        <ItemDescription>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Odio unde impedit at odit. Consequatur, 
          deleniti incidunt vel esse id quis eius. 
          Harum quis iste similique recusandae 
          veritatis porro accusantium? Est.</ItemDescription>
        </Item>
        <Item>
        <ItemTitle>TITLE</ItemTitle>
        <ItemDescription>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Odio unde impedit at odit. Consequatur, 
          deleniti incidunt vel esse id quis eius. 
          Harum quis iste similique recusandae 
          veritatis porro accusantium? Est.</ItemDescription>
        </Item>
      </AboutUsItems>  */}
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
  background-color: ${Variables.baseColor};

  /* @media (${Variables.tabletL}) {
    padding-top: none;
    margin-top: -15%;
  } */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 40%;
  @media (max-width: 1024px) {
    height: 50%;
  }
  @media (${Variables.desktopXS}) {
    height: 40%;
  }
  @media (${Variables.tabletL}) {
    height: 40%;
    margin-top: 20%;
  }
  @media (${Variables.mobileL}) {
    height: 40%;
  }
  @media (${Variables.mobileS}) {
    height: 50%;
    margin-top: 10%;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  line-height: 20px;
  color: ${Variables.principalColor};
  font-family: ${Variables.secondaryFont};
  font-weight: normal;
  @media (max-width: 1024px) {
    width: 40%;
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
  height: 70%;
  background-color: ${Variables.baseColor};

  @media (max-width: 1024px) {
    height: 60%;
  }
  @media (${Variables.desktopXS}) {
    height: 100%;
    align-content: space-around;
  }
  @media (${Variables.tabletL}) {
    height: 100%;
    align-content: space-around;
  }
  @media (${Variables.mobileL}) {
    height: 100%;
  }
`;

const TimeLineContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (${Variables.desktopXS}) {
    height: 50%;
    width: 100%;
  }
  @media (${Variables.tabletL}) {
    height: 40%;
  }
  @media (${Variables.mobileL}) {
    height: 50%;
  }
`;

const CarrouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media (max-width: 1024px) {
    height: 70%;
  }
  @media (${Variables.desktopXS}) {
    width: 100%;
    height: 50%;
  }
  @media (${Variables.tabletL}) {
    height: 40%;
    align-items: center;
  }
  @media (${Variables.mobileL}) {
    height: 40%;
  }
  @media (${Variables.mobileS}) {
    height: 40%;
  }
`;

// const AboutUsItems = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
//   background-color: #965d5d;
// `;

//  const Item = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background-color: antiquewhite;
//   width: 50%;
//   height: 70vh;
//  `;

// const ItemTitle = styled.h2`
//   font-size: 40px;
//   width: 90%;
//   color: black;
//   font-family: 'Nunito', sans-serif;
//   font-weight: 400px;
// `;
// const ItemDescription = styled.p`
//   font-size: 25px;
//   color: #5e5e5e ;
//   font-family: 'Nunito', sans-serif;
//   width: 90%;
// `;
