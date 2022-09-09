import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//Assets
import styled, { css } from "styled-components";
import Variables from "../../Styles/Variables";
import GlobalStyles from "../../Styles/GlobalStyles";
import Logo from "../../Assets/LogoConSombra.png";
//Icons
import { Menu } from "@styled-icons/heroicons-solid/Menu";
import { Cross } from "@styled-icons/entypo/Cross";
function NavBar() {
  const location = useLocation();
  const [selected, setSelected] = useState(null);
  const [drawer, setDrawer] = useState(null);
  const width = window.innerWidth;

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  if (width < 769) {
    return (
      <MobileNavBarContainer
        drawer={drawer}
        onClick={() => (drawer === "true" ? setDrawer(null) : null)}
      >
        {drawer === "true" ? (
          <CrossIconContainer>
            <CrossIcon onClick={() => setDrawer(null)} />
          </CrossIconContainer>
        ) : (
          <MenuIcon onClick={() => setDrawer("true")} />
        )}
        <Drawer drawer={drawer}>
          <HomeLinks to="/" drawer={drawer}>
            Inicio
          </HomeLinks>
          <HomeLinks
            to="/Nosotros"
            selected={selected === "/Nosotros" ? true : false}
            drawer={drawer}
          >
            Nosotros
          </HomeLinks>
          <HomeLinks
            to="/Alfajores"
            selected={selected === "/Alfajores" ? true : false}
            drawer={drawer}
          >
            Alfajores
          </HomeLinks>
          <HomeLinks
            to="/Productos"
            selected={selected === "/Productos" ? true : false}
            drawer={drawer}
          >
            Productos
          </HomeLinks>
          <HomeLinks
            to="/Tienda"
            selected={selected === "/Tienda" ? true : false}
            drawer={drawer}
          >
            Tienda
          </HomeLinks>
          <HomeLinks
            to="/Contacto"
            selected={selected === "/Contacto" ? true : false}
            drawer={drawer}
          >
            Contacto
          </HomeLinks>
        </Drawer>
      </MobileNavBarContainer>
    );
  } else {
    return (
      <NavBarContainer selected={selected}>
        <Container>
          <HomeLinks to="/" home={true}>
            Inicio
          </HomeLinks>
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
        <Img src={Logo} alt="" selected={selected} />
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
}

export default NavBar;

const NavBarContainer = styled.div`
  ${GlobalStyles.container}
  position: fixed;
  justify-content: space-evenly;
  height: ${Variables.navBarHeight};

  background: ${(props) =>
    props.selected === "/"
      ? Variables.navBarTransparentColor
      : Variables.navBarColor};
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

  ${(props) =>
    props.drawer === "true" &&
    css`
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-bottom: 1px solid ${Variables.secondaryColor};

      @media (${Variables.mobileL}) {
        font-size: 1.2rem;
      } ;
    `}
`;

const Img = styled.img`
  width: 120px;
  margin-top: 1%;
  padding-top: 10px;
  transition: all 0.5s ease;

  ${(props) =>
    props.selected !== "/" &&
    css`
      width: 90px;
      margin-top: 0px;
      padding-top: 0;
    `}

  ${(props) =>
    props.selected === "/" &&
    css`
      ${NavBarContainer}:hover & {
        width: 90px;
        margin-top: 0px;
        padding-top: 0;
      }
    `}
`;

const MobileNavBarContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 500;
  flex-direction: column;
  width: 60%;
  height: 100%;

  ${(props) =>
    props.drawer === "true" &&
    css`
      background: ${Variables.navBarTransparentColor};
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      align-items: center;
      justify-content: space-around;

      animation: fadeIn 0.5s normal;

      @keyframes fadeIn {
        0% {
          transform: translateX(-100%);
          opacity: 0;
        }
        100% {
          transform: translateX(0%);
          opacity: 1;
        }
      }
    `};
`;

const MenuIcon = styled(Menu)`
  color: ${Variables.principalColor};
  width: 40px;
  margin-top: 10px;
  margin-left: 10px;

  &:hover {
    color: ${Variables.secondaryColor};
  }
`;

const CrossIconContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  border-bottom: 1px solid ${Variables.secondaryColor};
`;

const CrossIcon = styled(Cross)`
  color: ${Variables.principalColor};
  width: 40px;
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 10px;

  &:hover {
    color: ${Variables.secondaryColor};
  }
`;

const Drawer = styled.div`
  ${(props) =>
    props.drawer === "true"
      ? css`
          display: flex;
          flex-direction: column;
          width: 100%;
          flex: 5;
          margin-bottom: 1px;
        `
      : css`
          display: none;
        `}
`;
