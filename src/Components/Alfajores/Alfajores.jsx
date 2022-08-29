import React from "react";
import GeneralSwiper from "../Swipers/GeneralSwiper";
//CSS
import styled from "styled-components";
import { productImages } from "../../Assets";
import Footer from "../Footer/Footer";


function Alfajores() {
  return (
    <StyledContainer>
      <GeneralSwiper  images={productImages} />
      <Footer/>
    </StyledContainer>
  );
}

export default Alfajores;

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
`;


