import React from "react";
import styled from "styled-components";
import { images } from "../../Assets/Pics/HomeSwiper/index";
import Footer from "../Footer/Footer";
import GeneralSwiper from "../Swipers/GeneralSwiper";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.jsx";

function Home() {
  return (
    <StyledContainer>
      <GeneralSwiper images={images} />
      <FeaturedProducts />
      <Footer />
    </StyledContainer>
  );
}

export default Home;

const StyledContainer = styled.div`
  height: 100%;
`;
