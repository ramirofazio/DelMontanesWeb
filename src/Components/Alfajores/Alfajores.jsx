import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: pink;
`;

function Alfajores() {
  return (
    <StyledContainer>
      <h1> Alfajores</h1>
    </StyledContainer>
  );
}

export default Alfajores;
