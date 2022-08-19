import React, { useEffect, useState } from "react";
//CSS
import styled, { css } from "styled-components";
import Variables from "../../Styles/Variables";
import GlobalStyles from "../../Styles/GlobalStyles";
//Assets
import Logo from "../../Assets/LogoConSombra.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const [fixedOrStatic, setFixedOrStatic] = useState("Fixed");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (location.pathname !== "/") {
      setFixedOrStatic("Static");
    } else {
      setFixedOrStatic("Fixed");
    }
    setSelected(location.pathname);
    console.log(location.pathname);
  }, [location]);

  return (
    <NavBarContainer fixedOrStatic={fixedOrStatic}>
      <Container>
        <HomeLinks fixedOrStatic={fixedOrStatic} to="/">
          Inicio
        </HomeLinks>
        <HomeLinks
          fixedOrStatic={fixedOrStatic}
          to="/Nosotros"
          selected={selected === "/Nosotros" ? true : false}
        >
          Nosotros
        </HomeLinks>
        <HomeLinks
          fixedOrStatic={fixedOrStatic}
          to="/Alfajores"
          selected={selected === "/Alfajores" ? true : false}
        >
          Alfajores
        </HomeLinks>
      </Container>
      <Img src={Logo} alt="" fixedOrStatic={fixedOrStatic} />
      <Container>
        <HomeLinks
          fixedOrStatic={fixedOrStatic}
          to="/Tienda"
          selected={selected === "/Tienda" ? true : false}
        >
          Tienda
        </HomeLinks>
        <HomeLinks
          fixedOrStatic={fixedOrStatic}
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
  justify-content: space-evenly;

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

  ${(props) =>
    props.fixedOrStatic === "Fixed" &&
    css`
      height: ${Variables.navBarHeight};
      position: fixed;
      background: ${Variables.navBarTransparentColor};
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      &:hover {
        height: ${Variables.navBarHoverHeight};
        background-color: ${Variables.navBarColor};
      }
    `}

  ${(props) =>
    props.fixedOrStatic === "Static" &&
    css`
      height: ${Variables.navBarHoverHeight};
      position: static;
      background-color: ${Variables.navBarColor};
    `}
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

  ${(props) =>
    props.fixedOrStatic === "Fixed" &&
    css`
      font-size: 1.2rem;

      ${NavBarContainer}:hover & {
        font-size: 1rem;
      }
    `}

  ${(props) =>
    props.fixedOrStatic === "Static" &&
    css`
      font-size: 1rem;
    `}

    ${(props) =>
    props.selected === true &&
    css`
      text-decoration: underline;
      text-decoration-thickness: 1px;
    `}
`;

const Img = styled.img`
  ${(props) =>
    props.fixedOrStatic === "Fixed" &&
    css`
      width: 100px;
      margin-top: 20px;
      transition: ${Variables.basicTransition};

      ${NavBarContainer}:hover & {
        width: 70px;
        margin-top: 0px;
      }
    `}

  ${(props) =>
    props.fixedOrStatic === "Static" &&
    css`
      width: 70px;
      transition: ${Variables.basicTransition};
    `}
`;
