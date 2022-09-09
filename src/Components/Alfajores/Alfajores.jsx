import React from "react";
//Assets
import styled from "styled-components";
import { images } from "../../Assets/Pics/AlfajoresSwiper/index";
//Components
import Footer from "../Footer/Footer";
import GeneralSwiper from "../Swipers/GeneralSwiper";
import AlfajoresDetails from "./AlfajoresDetails/AlfajoresDetails.jsx";

function Alfajores() {
  return (
    <StyledContainer>
      <GeneralSwiper images={images} />
      <AlfajoresDetails/>
      <Footer />
    </StyledContainer>
  );
}

export default Alfajores;

const StyledContainer = styled.div`
  height: 100%;
`;
