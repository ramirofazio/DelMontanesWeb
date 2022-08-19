import React from "react";
//CSS
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";
//Components
import HomeSwiper from "./HomeSwiper";
//import Footer from "../Footer/Footer";

function Home() {
  return (
    <StyledContainer>
      <HomeSwiper />
    </StyledContainer>
  );
}

export default Home;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
  flex-direction: column;
  height: 100%;
`;
