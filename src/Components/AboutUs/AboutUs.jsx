import React from "react";
//CSS
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import TimeLine from "./AboutUsTimeLine";
import AboutUsCarrousel from "./AboutUsCarrousel";
import image1 from "../../Assets/Pics/IMG_7056.jpg";
import image2 from "../../Assets/Pics/IMG_9728.jpg";
import image3 from "../../Assets/Pics/IMG_9693.jpg";
import image4 from "../../Assets/Pics/IMG_7056.jpg";
import image5 from "../../Assets/Pics/IMG_3211.jpg";
import image6 from "../../Assets/Pics/IMG_7060.jpg";

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
          <TimeLine/>
        </TimeLineContainer>
        <CarrouselContainer>
          <AboutUsCarrousel 
          images={[image1, image2, image3, image4, image5, image6 ]}/>
        </CarrouselContainer>
      </AboutUsTimeLine>
      <AboutUsItems>
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
      </AboutUsItems> 
    </StyledContainer>
  );
}

export default AboutUs;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px;
`;

const Title = styled.h1`
  font-size: 65px;
  line-height: 20px;
  color: ${Variables.principalColor};
  font-family: 'Nunito', sans-serif;
`;

const Line = styled.div`
  width: 5%;
  border-bottom: solid #919191 3px;
`;

const Description = styled.h2`
  font-size: 25px;
  color: #919191;
`;

const AboutUsTimeLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  `;
const TimeLineContainer = styled.div`
  height: 100vh;
  width: 50%;
`;
const CarrouselContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const AboutUsItems = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #965d5d;
  flex-wrap: wrap;
`;

 const Item = styled.div`
  background-color: antiquewhite;
  width: 50%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 `;

const ItemTitle = styled.h2`
  font-size: 40px;
  width: 90%;
  color: black;
  font-family: 'Nunito', sans-serif;
  font-weight: 400px;
`;
const ItemDescription = styled.p`
  color: black;
  font-size: 25px;
  width: 90%;
  color: #5e5e5e ;
  font-family: 'Nunito', sans-serif;
`;