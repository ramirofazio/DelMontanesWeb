import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";

function Alfajores() {
  return (
    <StyledContainer>
      <h1>About Us</h1>
    </StyledContainer>
  );
}

export default Alfajores;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
  background-color: red;
`;
