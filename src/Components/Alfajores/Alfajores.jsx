import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";

function Alfajores() {
  return (
    <StyledContainer>
      <h1>Alfajores</h1>
    </StyledContainer>
  );
}

export default Alfajores;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
  background-color: white;
`;
