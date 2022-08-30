import React from "react";
import GeneralSwiper from "../Swipers/GeneralSwiper";
//CSS
import styled from "styled-components";
import { images } from "../../Assets/Pics/HomeSwiper/index";
import Footer from "../Footer/Footer";

function Products() {
  return (
    <StyledContainer>
      <GeneralSwiper images={images} />
      <Footer />
    </StyledContainer>
  );
}

export default Products;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;
