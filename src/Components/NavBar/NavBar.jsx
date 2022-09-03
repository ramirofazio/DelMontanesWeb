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
  const [menu, setMenu] = useState(false);
console.log(menu);
  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <NavBarContainer>
    <NavBarContainerWeb>
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
      <ImgContainer>
        <Img src={Logo} alt="" />
      </ImgContainer>
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
    </NavBarContainerWeb> 
    <NavBarDrawer>
    <DrawerContainer>
        {menu === false ? (
          <MenuIcon onClick={() => setMenu(true)} />
        ) : (
          <MenuCross onClick={() => setMenu(false)} />
        )}
      </DrawerContainer>
      {menu === true ? (
        <ContainerDrawer>
          <HomeLinksDrawer to="/" onClick={() => setMenu(false)}>
            Inicio
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Nosotros"
            selected={selected === "/Nosotros" ? true : false}
            onClick={() => setMenu(false)}
            >
            Nosotros
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Alfajores"
            selected={selected === "/Alfajores" ? true : false}
            onClick={() => setMenu(false)}
            >
            Alfajores
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Productos"
            selected={selected === "/Productos" ? true : false}
            onClick={() => setMenu(false)}
            >
            Productos
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Tienda"
            selected={selected === "/Tienda" ? true : false}
            onClick={() => setMenu(false)}
            >
            Tienda
          </HomeLinksDrawer>
          <HomeLinksDrawer
            to="/Contacto"
            selected={selected === "/Contacto" ? true : false}
            onClick={() => setMenu(false)}
            >
            Contacto
          </HomeLinksDrawer>
        </ContainerDrawer>
      ) : (
        false
      )}
    </NavBarDrawer>
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.div`
  display:flex;
  background-color: "transparent";
`;
const NavBarContainerWeb = styled.div`
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
    display:none;
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
const ImgContainer = styled.div`
  @media (${Variables.tabletL}) {
    display: none;
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
const DrawerContainer = styled.div`
  display: none;
  @media (${Variables.tabletL}) {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: flex-start;
    color: red;
    z-index: 200;
  }
`;
const MenuIcon = styled(Menu)`
  color: ${Variables.principalColor};
  width: 50px;
  @media (${Variables.mobileS}) {
  }
`;
const MenuCross = styled(Cross)`
  color: ${Variables.principalColor};
  width: 50px;
  @media (${Variables.mobileS}) {
  }
`;

const ContainerDrawer = styled.div`
  display: none;
  @media (${Variables.tabletL}) {
    display: flex;
    height: 70vh;
    position: fixed;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: -100;
    justify-content: space-around;
    flex-direction: column;
    background: ${Variables.navBarColor};
  }
`;

const HomeLinksDrawer = styled(Link)`
  @media (${Variables.tabletL}) {
    padding-left: 10px;
    display:flex;
    align-items: center;
    height:16.5%;
    border-bottom:solid 2px ${Variables.principalColor};
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
      font-size: 1.7rem;
    }
  }
  @media (${Variables.mobileL}) {
    font-size: 1.9rem;
  }
`;
const NavBarDrawer = styled.div`
  display:none;
  @media (${Variables.tabletL}){
    ${GlobalStyles.container}
  position: fixed;
  justify-content: space-evenly;
  height: ${Variables.navBarHeight};
  background-color: ${(props) => (props.menu === false ? "transparent": null)};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  animation: fadeIn 1s ease-in;
  z-index: 200;
  transition: all 0.7s ease;
  }
`;