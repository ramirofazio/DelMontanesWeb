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
  }, [location]);

  return (
    <NavBarContainer fixedorstatic={fixedOrStatic}>
      <Container>
        <HomeLinks fixedorstatic={fixedOrStatic} to="/">
          Inicio
        </HomeLinks>
        <HomeLinks
          fixedorstatic={fixedOrStatic}
          to="/Nosotros"
          selected={selected === "/Nosotros" ? true : false}
        >
          Nosotros
        </HomeLinks>
        <HomeLinks
          fixedorstatic={fixedOrStatic}
          to="/Alfajores"
          selected={selected === "/Alfajores" ? true : false}
        >
          Alfajores
        </HomeLinks>
      </Container>
      <Img src={Logo} alt="" fixedorstatic={fixedOrStatic} />
      <Container>
        <HomeLinks
          fixedorstatic={fixedOrStatic}
          to="/Tienda"
          selected={selected === "/Tienda" ? true : false}
        >
          Tienda
        </HomeLinks>
        <HomeLinks
          fixedorstatic={fixedOrStatic}
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
  z-index: auto;
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
    props.fixedorstatic === "Fixed" &&
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
    props.fixedorstatic === "Static" &&
    css`
      height: ${Variables.navBarHoverHeight};
      position: relative;
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
  color: ${Variables.principalColor};
  transition: ${Variables.basicTransition};

  &:hover {
    color: ${Variables.secondaryColor};
  }

  ${(props) =>
    props.fixedorstatic === "Fixed" &&
    css`
      font-size: 1.4rem;

      ${NavBarContainer}:hover & {
        font-size: 1.3rem;
      }
    `}

  ${(props) =>
    props.fixedorstatic === "Static" &&
    css`
      font-size: 1.3rem;
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
    props.fixedorstatic === "Fixed" &&
    css`
      width: 130px;
      margin-top: 20px;
      transition: ${Variables.basicTransition};

      ${NavBarContainer}:hover & {
        width: 80px;
        margin-top: 0px;
      }
    `}

  ${(props) =>
    props.fixedorstatic === "Static" &&
    css`
      width: 80px;
      margin-top: 0px;
      transition: ${Variables.basicTransition};
    `}
`;
