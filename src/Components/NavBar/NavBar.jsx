import React from "react";
//CSS
import styled from "styled-components";
import Variables from "../../Styles/Variables";
import GlobalStyles from "../../Styles/GlobalStyles";
//Assets
import Logo from "../../Assets/LogoConSombra.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <NavBarContainer>
      <Container>
        <HomeLinks to="/">Inicio</HomeLinks>
        <HomeLinks to="/Nosotros">Nosotros</HomeLinks>
        <HomeLinks to="/Alfajores">Alfajores</HomeLinks>
      </Container>
      <Img src={Logo} alt="" />
      <Container>
        <HomeLinks to="/Tienda">Tienda</HomeLinks>
        <HomeLinks to="/Contacto">Contacto</HomeLinks>
      </Container>
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.div`
  ${GlobalStyles.container}
  justify-content: space-evenly;
  height: ${Variables.navBarHeight};
  background-color: ${Variables.navBarColor};
  position: fixed;
  background: ${Variables.navBarTransparentColor};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  animation: fadeIn 1s ease-in;
  z-index: 100;
  transition: ${Variables.basicTransition};

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    25% {
      opacity: 0.25;
      transform: translateY(-2.5px);
    }
    50% {
      opacity: 0.5;
      transform: translateY(-1.8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &:hover {
    height: ${Variables.navBarHoverHeight};
    background-color: ${Variables.navBarColor};
    transition: all 1.5s ease;
  }
`;

const Container = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const HomeLinks = styled(Link)`
  ${GlobalStyles.a}
  font-size: 1.2rem;
  color: ${Variables.principalColor};
  transition: ${Variables.basicTransition};

  ${NavBarContainer}:hover & {
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 100px;
  margin-top: 20px;
  transition: ${Variables.basicTransition};

  ${NavBarContainer}:hover & {
    width: 70px;
    margin-top: 0px;
  }
`;
