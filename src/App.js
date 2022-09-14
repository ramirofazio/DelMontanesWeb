import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
const NavBar = lazy(() => import("./Components/NavBar/NavBar"));
const Home = lazy(() => import("./Components/Home/Home"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const Alfajores = lazy(() => import("./Components/Alfajores/Alfajores"));
const Tienda = lazy(() => import("./Components/Tienda/Tienda"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Products = lazy(() => import("./Components/Products/Products"));
import Fallback from "./Components/Fallback/Fallback";

function App() {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
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
      </Suspense>
    </Router>
  );
}

export default App;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
`;
