import React from 'react';
import styled from 'styled-components';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Alfajores from './Components/Alfajores/Alfajores';
import Tienda from './Components/Tienda/Tienda';
import Contact from './Components/Contact/Contact';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <StyledContainer id="inicio">
      <NavBar />
      <StyledSection id="inicio">
        <Home />
      </StyledSection>
      <StyledSection id="nosotros">
        <AboutUs />
      </StyledSection>
      <StyledSection id="alfajores">
        <Alfajores />
      </StyledSection>
      <StyledSection id="tienda">
        <Tienda />
      </StyledSection>
      <StyledSection id="contacto">
        <Contact />
      </StyledSection>
    </StyledContainer>
  );
}

export default App;
