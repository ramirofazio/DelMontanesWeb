import React from "react";
import Slider from "../Slider/Slider";
//CSS
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";
import { productImages } from "../../Assets";



function Alfajores() {
  return (
    <StyledContainer>
      {/* <MainTitle>Alfajores</MainTitle> */}
      <Slider  images={productImages} />
    </StyledContainer>
  );
}

export default Alfajores;

const StyledContainer = styled.div`
  /* ${GlobalStyles.container} */
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 100px;
  /* &:hover {
  background-color: red;
  } */
`;

// const MainTitle = styled.h1`
//   background-color: #c2c2c2;
// `;


