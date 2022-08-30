import React from "react";
//CSS
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import TimeLine from "./AboutUsTimeLine";
import Footer from "../Footer/Footer";
import AboutUsCarrousel from "./AboutUsCarrousel";
import { images } from "../../Assets/Pics/HomeSwiper/index";

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
  background-color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 40%;
  @media ( ${Variables.desktopXS}) {
    height:35%;
  }

`;

const Title = styled.h1`
  font-size: 65px;
  line-height: 20px;
  color: ${Variables.principalColor};
  font-family: "Nunito", sans-serif; 
  @media (${Variables.mobileL}){
    line-height: 50px;
    font-size: 50px;
  }
`;

const Line = styled.div`
  width: 5%;
  border-bottom: solid #919191 3px;
  @media (${Variables.mobileL}){
    width: 15%;
  }
`;

const Description = styled.h2`
  font-size: 25px;
  color: #919191;
  @media (${Variables.mobileL}){
    font-size: 20px;
  }
`;

const AboutUsTimeLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  height: 80%;
  @media ( ${Variables.mobileL}) {
    height:100%;
  }
`;

const TimeLineContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (${Variables.desktopXS}) {
    width: 100%;
    height: 50%;
  }
  @media ( ${Variables.mobileL}) {
    height:50%;
  }
`;

const CarrouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  @media (${Variables.desktopXS}) {
    width: 100%;
    height: 50%;
  }
  @media ( ${Variables.mobileL}) {
    height:50%;
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
