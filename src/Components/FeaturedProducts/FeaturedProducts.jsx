import React from "react";
import { featuredProducts } from "./featuredProducts";
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import GlobalStyles from "../../Styles/GlobalStyles";

function FeaturedProducts() {
  return (
    <Container>
      <SubContainer>
        <Title data-aos="fade-down">NOSOTROS</Title>
        <Description data-aos="zoom-in">
          Elaboramos todos nuestros productos de forma artesanal y en pequeñas
          cantidades, respetando siempre la calidad de nuestras materias primas
          y procesos de elaboración. <br /> Estamos muy felices de poder tener
          este espacio y llegar a todos los rincones de nuestra amada ARGENTINA!
        </Description>
        <Button href="/Nosotros" data-aos="zoom-in">
          CONOCENOS
        </Button>
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
  font-size: 60px;
  font-family: ${Variables.secondaryFont};
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${Variables.principalColor};

  @media (${Variables.mobileL}) {
    font-size: 50px;
  }

  @media (${Variables.mobileS}) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  text-align: center;
  color: ${Variables.principalColor};
  font-size: 18px;
  font-weight: 400;
  width: 80%;
  padding: 0;
  margin: 0;

  @media (${Variables.mobileL}) {
    font-size: 14px;
    width: 100%;
  }
  @media (${Variables.mobileS}) {
    font-size: 12px;
  }
`;

const Button = styled.a`
  ${GlobalStyles.button}
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media (${Variables.mobileL}) {
    font-size: 15px;
    width: 50%;
    height: 10%;
  }

  @media (${Variables.mobileS}) {
    font-size: 13px;
    width: 50%;
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
`;

const ProductContainer = styled.a`
  width: 45%;
  height: 40%;
  margin: 10px;
  border-radius: 25px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 1px 1px 5px ${Variables.principalColor};
  transition: ${Variables.basicTransition};

  @media (${Variables.mobileL}) {
    width: 100%;
    height: 30%;
    margin-bottom: 15px;
  }

  &:hover {
    box-shadow: none;
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
  background-position: center;
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

    @media (${Variables.tabletL}) {
      padding-top: 40%;
    }
  }
`;

const ProductTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
  color: #000;
  transition: ${Variables.basicTransition};

  ${ProductSubContainer}:hover & {
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
  }

  @media (${Variables.mobileL}) {
    font-size: 25px;
  }

  @media (${Variables.mobileS}) {
    font-size: 20px;
  }
`;

const ProductDescription = styled.p`
  margin-top: 0;
  font-size: 15px;
  color: #000;
  transition: ${Variables.basicTransition};
  width: 100%;
  text-align: center;

  ${ProductSubContainer}:hover & {
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
  }

  @media (${Variables.mobileL}) {
    font-size: 12px;
  }
`;
