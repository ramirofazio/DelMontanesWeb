import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//CSS
import styled from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
//Components
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Alfajores from "./Components/Alfajores/Alfajores";
import Tienda from "./Components/Tienda/Tienda";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";

function App() {
  return (
    <Router>
      <NavBar />
      <StyledContainer>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Nosotros" exact element={<AboutUs />} />
          <Route path="/Alfajores" exact element={<Alfajores />} />
          <Route path="/Tienda" exact element={<Tienda />} />
          <Route path="/Contacto" exact element={<Contact />} />
          <Route path="/Productos" exact element={<Products />} />
        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default App;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
`;
