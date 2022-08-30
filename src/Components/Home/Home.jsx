import React from "react";
//CSS
import styled from "styled-components";
import { images } from "../../Assets/Pics/HomeSwiper/index";
//Components
import Footer from "../Footer/Footer";
import GeneralSwiper from "../Swipers/GeneralSwiper";

function Home() {
  return (
    <StyledContainer>
      <GeneralSwiper images={images} />
      <Footer />
    </StyledContainer>
  );
}

export default Home;

const StyledContainer = styled.div`
  height: 100%;
`;
