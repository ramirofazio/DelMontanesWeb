import React from "react";
import { featuredProducts } from "./featuredProducts";
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import GlobalStyles from "../../Styles/GlobalStyles";

function FeaturedProducts() {
  return (
    <Container>
      <SubContainer>
        <Title>NOSOTROS</Title>

        <Description>
          Somos una empresa mendocina dedicada a la elaboración de productos y
          alfajores premium. Nuestro proceso de producción es una perfecta
          amalgama de lo tradicional con lo actual. Conservamos la calidad junto
          con la calidez de los procesos manuales, conjugándolos con las
          técnicas más avanzadas de fabricación.
        </Description>
        <Button>CONOCENOS</Button>
      </SubContainer>
      <CardsContainer>
        {featuredProducts?.map(({ title, description, img }, index) => (
          <ProductContainer key={index}>
            <BackgroundImg src={img} alt="" />
            <ProductTitle>{title}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
          </ProductContainer>
        ))}
      </CardsContainer>
    </Container>
  );
}

export default FeaturedProducts;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150vh;
  overflow: hidden;
  padding: 5%;
`;
const SubContainer = styled.div`
  width: 100%;
  flex: 1;
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
`;
const Description = styled.p`
  text-align: center;
  color: ${Variables.principalColor};
  font-weight: 400;
  font-size: 85%;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const Button = styled.button`
  ${GlobalStyles.button}
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex: 1;

  outline: 1px solid blue;
`;

const ProductContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 35%;
  margin: 10px;
  border-radius: 10px;
`;
const ProductTitle = styled.h4`
  display: flex;
  outline: 1px solid red;
  width: fit-content;
`;
const ProductDescription = styled.p``;
const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
