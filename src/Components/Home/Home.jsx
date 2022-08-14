import React from "react";
import styled from "styled-components";
import homeImg from "../../Assets/Pics/IMG_9728.jpg";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

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
