import React from "react";
import styled from "styled-components";
import Variables from "../../Styles/Variables";

function CardAlfajores({ index, img, title, description }) {
  return (
    <CardContainer key={index}>
      <ImgContainer>
        <Img src={img}></Img>
      </ImgContainer>
      <InfoContainer>
        <TitleAlfajores>{title}</TitleAlfajores>
        <DescriptionAlfajores>{description}</DescriptionAlfajores>
      </InfoContainer>
    </CardContainer>
  );
}

export default CardAlfajores;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  width: 80%;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${Variables.navBarColor};
  @media (${Variables.tabletL}) {
    width: 95%;
  }
  @media (${Variables.mobileL}) {
    height: 18%;
    width: 98%;
  }
  @media (${Variables.mobileS}) {
    height: 12%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 30%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (${Variables.desktopXS}) {
    width: 50%;
  }
  @media (${Variables.tabletL}) {
  }
  @media (${Variables.mobileL}) {
  }
`;

const TitleAlfajores = styled.h1`
  font-size: 20px;
  text-align: center;
  color: ${Variables.principalColor};
  @media (${Variables.tabletL}) {
    font-size: 16px;
  }
  @media (${Variables.mobileL}) {
    font-size: 13px;
  }
`;

const DescriptionAlfajores = styled.h1`
  font-size: 18px;
  color: ${Variables.principalColor};
  @media (${Variables.mobileL}) {
    font-size: 12px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
