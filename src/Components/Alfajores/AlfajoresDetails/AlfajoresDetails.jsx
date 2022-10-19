import React from "react";
import { alfajoresDetails } from "./alfajoresDetails";
import CardAlfajores from "../../Card/CardAlfajores";
import styled from "styled-components";
import Variables from "../../../Styles/Variables";

function FeaturedProducts() {
  return (
    <Container>
      <SubContainer>
        <Title>ALFAJORES</Title>
        <Description>DESCRIPCIÒN ALFAJORES</Description>
      </SubContainer>
      <CardsContainer>
        {alfajoresDetails?.map(({ title, description, img }, index) => (
          <CardAlfajores
            title={title}
            description={description}
            img={img}
            key={index}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default FeaturedProducts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200vh;
  overflow: hidden;
  padding: 10px;
  background-color: ${Variables.baseColor};
`;
const SubContainer = styled.div`
  width: 100%;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const Title = styled.h1`
  color: ${Variables.principalColor};
  font-size: 55px;
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;

  @media (${Variables.mobileL}) {
    font-size: 45px;
  }

  @media (${Variables.mobileS}) {
    font-size: 35px;
  }
`;
const Description = styled.p`
  text-align: center;
  color: ${Variables.principalColor};
  font-weight: 400;
  font-size: 18px;
  width: 100%;
  padding: 0;
  margin: 0;

  @media (${Variables.mobileL}) {
    font-size: 15px;
    width: 90%;
  }
  @media (${Variables.mobileS}) {
    font-size: 15px;
    width: 100%;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex: 1;

  @media (${Variables.tabletL}) {
    overflow: scroll;
  }
  @media (${Variables.mobileS}) {
    height: 70%;
  }
`;
