import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//Assets
import styled, { css } from "styled-components";
import Variables from "../../Styles/Variables";
import GlobalStyles from "../../Styles/GlobalStyles";
import Logo from "../../Assets/LogoConSombra.png";
//Icons
import { Menu } from "@styled-icons/heroicons-solid/Menu";
function NavBar() {
  const location = useLocation();
  const [selected, setSelected] = useState(null);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <NavBarContainer menu={menu} >
      <DrawerIcon>
        {menu === false ? <MenuIcon onClick={() => setMenu(true)} /> : null}
      </DrawerIcon>
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
      {menu === true ? (
        <Background onClick={() => setMenu(false)}>
        <ContainerDrawer>
          <HomeLinksDrawer to="/" onClick={() => setMenu(false)}>
            INICIO
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Nosotros"
            selected={selected === "/Nosotros" ? true : false}
            onClick={() => setMenu(false)}
          >
            NOSOTROS
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Alfajores"
            selected={selected === "/Alfajores" ? true : false}
            onClick={() => setMenu(false)}
          >
            ALFAJORES
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Productos"
            selected={selected === "/Productos" ? true : false}
            onClick={() => setMenu(false)}
          >
            PRODUCTOS
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Tienda"
            selected={selected === "/Tienda" ? true : false}
            onClick={() => setMenu(false)}
            >
            TIENDA
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Contacto"
            selected={selected === "/Contacto" ? true : false}
            onClick={() => setMenu(false)}
            >
            CONTACTO
          </HomeLinksDrawer>
        </ContainerDrawer>
      </Background>
      ) : null}
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
  @media (${Variables.tabletL}) {
    transition:none;
    background: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    &:hover {
      background-color: none;
    }
    width: ${(props) => (props.menu ? "80%" : "100%")};
  }
`;

const Container = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  @media (${Variables.tabletL}) {
    display: none;
  }
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
  @media (${Variables.tabletL}) {
    display: none;
  }
  width: 130px;
  margin-top: 20px;
  transition: all 0.5s ease;

  ${NavBarContainer}:hover & {
    width: 100px;
    margin-top: 0px;
  }
`;

const DrawerIcon = styled.div`
  display: none;
  @media (${Variables.tabletL}) {
    display: flex;
    width: 100%;
  }
`;

const MenuIcon = styled(Menu)`
  color: ${Variables.principalColor};
  width: 50px;
  @media (${Variables.mobileS}) {
  }
`;

const ContainerDrawer = styled.div`
  display: none;
  @media (${Variables.tabletL}) {
    display: flex;
    height: 80vh;
    position: fixed;
    width: 80%;
    left: 0;
    top: 0;
    z-index: -100;
    justify-content: space-around;
    flex-direction: column;
    background: ${Variables.navBarColor};
  }
  @media (${Variables.mobileL}) {
    width:90%;
  }
`;

const HomeLinksDrawer = styled(Link)`
  @media (${Variables.tabletL}) {
    padding-left: 20px;
    display: flex;
    align-items: center;
    height: 16.5%;
    border-bottom: solid 2px ${Variables.principalColor};
    ${GlobalStyles.a}
    color: ${Variables.principalColor};
    transition: all 0.5s ease;
    font-size: 1.2rem;

    ${(props) =>
      props.selected === true &&
      css`
        text-decoration: underline;
        text-decoration-thickness: 1px;
        color: #d82626;
      `}

    &:hover {
      color: ${Variables.secondaryColor};
    }

    ${NavBarContainer}:hover & {
      font-size: 1.7rem;
    }
  }
  @media (${Variables.mobileL}) {
    font-size: 1.4rem;
  }
`;

const Background = styled.div`
   display: none;
  @media (${Variables.tabletL}) {
    display: flex;
    height: 200vh;
    position: fixed;
    width: 100vh;
    background-color: #00000081;
  }
`;