import React from "react";
//CSS
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import TimeLine from "./TimeLine";

function AboutUs() {
  return (
    <StyledContainer>
      <TitleContainer>
        <Title>NUESTRA HISTORIA</Title>
        <Line></Line>
        <Description>Navegá clickeando o deslizando en cada año</Description>
      </TitleContainer>
      <AboutUsTimeLine>
        <TimeLine/>
      </AboutUsTimeLine>
      <AboutUsItems>
        <Item>
        <h3>Item1</h3>
        </Item>
        <Item>
        <h3>Item2</h3>
        </Item>
        <Item>
        <h3>Item3</h3>
        </Item>
        <Item>
        <h3>Item4</h3>
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
  padding: 30px;
  height: 100%;
`;

const Title = styled.h1`
  display : flex ;
  font-size: 65px;
  justify-content: center;
  line-height: 55px;
  align-items: center;
  color: ${Variables.principalColor};
  font-family: 'Nunito', sans-serif;
`;

const Line = styled.div`
  width: 5%;
  border-bottom: solid #919191 3px;
  display: flex;
  align-items: center;
`;

const Description = styled.h2`
  font-size: 25px;
  color: #919191;
`;

const AboutUsTimeLine = styled.div`
  display: flex;
  height: 100vh;
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
  height: 80vh;
`;