import React from "react";
import styled from "styled-components";
import { images } from "../../Assets/Pics/HomeSwiper/index";
import Footer from "../Footer/Footer";
import GeneralSwiper from "../Swipers/GeneralSwiper";

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
