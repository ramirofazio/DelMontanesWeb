import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//Assets
import styled, { css } from "styled-components";
import Variables from "../../Styles/Variables";
import GlobalStyles from "../../Styles/GlobalStyles";
import Logo from "../../Assets/LogoConSombra.png";

function NavBar() {
  const location = useLocation();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <NavBarContainer>
      <Container>
        <HomeLinks to="/">Inicio</HomeLinks>
        <HomeLinks
          to="/Nosotros"
          selected={selected === "/Nosotros" ? true : false}
        >
          Nosotros
        </HomeLinks>
        <HomeLinks
          to="/Alfajores"
          selected={selected === "/Alfajores" ? true : false}
        >
          Alfajores
        </HomeLinks>
      </Container>
      <Img src={Logo} alt="" />
      <Container>
        <HomeLinks
          to="/Productos"
          selected={selected === "/Productos" ? true : false}
        >
          Productos
        </HomeLinks>
        <HomeLinks
          to="/Tienda"
          selected={selected === "/Tienda" ? true : false}
        >
          Tienda
        </HomeLinks>
        <HomeLinks
          to="/Contacto"
          selected={selected === "/Contacto" ? true : false}
        >
          Contacto
        </HomeLinks>
      </Container>
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.div`
  ${GlobalStyles.container}
  position: fixed;
  justify-content: space-evenly;
  height: ${Variables.navBarHeight};

  background: ${Variables.navBarTransparentColor};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  animation: fadeIn 1s ease-in;
  z-index: 200;
  transition: all 0.7s ease;

  &:hover {
    background-color: ${Variables.navBarColor};
  }

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
  color: ${Variables.principalColor};
  transition: all 0.5s ease;
  font-size: 1.4rem;

  ${(props) =>
    props.selected === true &&
    css`
      text-decoration: underline;
      text-decoration-thickness: 1px;
    `}

  &:hover {
    color: ${Variables.secondaryColor};
  }

  ${NavBarContainer}:hover & {
    font-size: 1.3rem;
  }
`;

const Img = styled.img`
  width: 130px;
  margin-top: 20px;
  transition: all 0.5s ease;

  ${NavBarContainer}:hover & {
    width: 100px;
    margin-top: 0px;
  }
`;
