import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles.js";
import Variables from "../../Styles/Variables";
import { scrollLinks } from "./scrollLinks.js";

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

const NavBarContainer = styled.div`
  ${GlobalStyles.container}

  position: fixed;
  justify-content: space-evenly;
  height: ${Variables.navBarHeight};
  z-index: 100;

  background-color: ${Variables.navBarColor};
`;

const HomeLinks = styled.a`
  ${GlobalStyles.a}

  font-size: 1.4rem;
`;
