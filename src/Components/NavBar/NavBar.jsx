import React from "react";
import { Link } from "react-router-dom";
//CSS
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles.js";
import Variables from "../../Styles/Variables";
//Links
import { Links } from "./scrollLinks.js";

function NavBar() {
  return (
    <NavBarContainer>
      {Links.map((link) => {
        return (
          <HomeLinks to={link.link} key={link.id}>
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

const HomeLinks = styled(Link)`
  ${GlobalStyles.a}

  font-size: 1.4rem;
`;
