import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";
import homeImg from "../../Assets/Pics/IMG_9728.jpg";

const StyledImg = styled.img`
  height: 100%;
`;

function Home() {
  return (
    <StyledContainer>
      <StyledImg src={homeImg} alt="home" />
    </StyledContainer>
  );
}

export default Home;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
`;
