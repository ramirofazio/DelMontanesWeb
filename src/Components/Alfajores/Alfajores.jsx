import React from "react";
import GeneralSwiper from "../Swipers/GeneralSwiper";
//CSS
import styled from "styled-components";
import { images } from "../../Assets/Pics/AlfajoresSwiper/index";
import Footer from "../Footer/Footer";

function Alfajores() {
  return (
    <StyledContainer>
      <GeneralSwiper images={images} />
      <Footer />
    </StyledContainer>
  );
}

export default Alfajores;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;
