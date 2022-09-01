import React from "react";
//Assets
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";

function Tienda() {
  return (
    <StyledContainer>
      <h1>Tienda</h1>
    </StyledContainer>
  );
}

export default Tienda;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
`;
