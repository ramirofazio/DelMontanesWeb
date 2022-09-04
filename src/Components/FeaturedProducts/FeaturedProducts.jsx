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
          Elaboramos todos nuestros productos de forma artesanal y en pequeñas
          cantidades, respetando siempre la calidad de nuestras materias primas
          y procesos de elaboración. <br /> Estamos muy felices de poder tener
          este espacio y llegar a todos los rincones de nuestra amada ARGENTINA!
        </Description>
        <Button href="/Nosotros">CONOCENOS</Button>
      </SubContainer>
      <CardsContainer>
        {featuredProducts?.map(({ title, description, img, link }, index) => (
          <ProductContainer key={index} href={link}>
            <ProductSubContainer img={img}>
              <InfoContainer>
                <ProductTitle>{title}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
              </InfoContainer>
            </ProductSubContainer>
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
  width: 80%;
  padding: 0;
  margin: 0;

  @media (${Variables.mobileL}) {
    font-size: 12px;
    width: 90%;
  }
  @media (${Variables.mobileS}) {
    font-size: 11px;
    width: 100%;
  }
`;
const Button = styled.a`
  ${GlobalStyles.button}
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media (${Variables.mobileL}) {
    font-size: 12px;
    width: 35%;
  }

  @media (${Variables.mobileS}) {
    font-size: 11px;
    width: 35%;
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
`;

const ProductContainer = styled.a`
  width: 45%;
  height: 40%;
  margin: 10px;
  border-radius: 25px;
  overflow: hidden;
  text-decoration: none;

  @media (${Variables.mobileL}) {
    width: 100%;
    margin-bottom: 15px;
  }

  @media (${Variables.mobileS}) {
    height: 35%;
  }
`;

const ProductSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  background-size: cover;
  text-decoration: none;
  transition: ${Variables.basicTransition};

  &:hover {
    transform: scale(1.2);
    justify-content: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  color: ${Variables.principalColor};
  transition: ${Variables.basicTransition};

  ${ProductSubContainer}:hover & {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    align-items: center;
    padding-top: 25%;
  }
`;

const ProductTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 0;

  @media (${Variables.mobileL}) {
    font-size: 25px;
  }

  @media (${Variables.mobileS}) {
    font-size: 20px;
  }
`;
const ProductDescription = styled.p`
  font-size: 15px;

  @media (${Variables.mobileL}) {
    font-size: 12px;
  }
`;
