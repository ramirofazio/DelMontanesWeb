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
        <Button href="/Nosotros">CONOCENOS</Button>
      </SubContainer>
      <CardsContainer>
        {featuredProducts?.map(({ title, description, img, link }, index) => (
          <ProductContainer key={index} img={img} href={link}>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200vh;
  overflow: hidden;
  padding: 5%;
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
`;
const Description = styled.p`
  text-align: center;
  color: ${Variables.principalColor};
  font-weight: 400;
  font-size: 18px;
  width: 80%;
  padding: 0;
  margin: 0;
`;
const Button = styled.a`
  ${GlobalStyles.button}
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex: 1;
`;

const ProductContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 40%;
  margin: 10px;
  border-radius: 25px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  background-size: cover;
  text-decoration: none;
  color: #53534b;
`;
const ProductTitle = styled.h1`
  display: flex;
  margin-top: 20px;
  margin-left: 5%;
  margin-bottom: 5px;
  width: fit-content;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;
const ProductDescription = styled.p`
  margin-top: 0;
  margin-left: 5%;
  width: fit-content;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;
