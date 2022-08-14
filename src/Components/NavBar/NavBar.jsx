import React from "react";
import { scrollLinks } from "./scrollLinks.js";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 10%;
  background-color: gray;
  position: fixed;
  z-index: 100;
`;

const HomeLinks = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: black;
`;

function NavBar() {
  return (
    <NavBarContainer>
      {scrollLinks.map((link) => {
        return (
          <HomeLinks href={link.url} key={link.id}>
            {link.text}
          </HomeLinks>
        );
      })}
    </NavBarContainer>
  );
}

export default NavBar;
