import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Fallback from "./Components/Fallback/Fallback";
const NavBar = lazy(() => import("./Components/NavBar/NavBar"));
const Home = lazy(() => import("./Components/Home/Home"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const Alfajores = lazy(() => import("./Components/Alfajores/Alfajores"));
const Tienda = lazy(() => import("./Components/Tienda/Tienda"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Products = lazy(() => import("./Components/Products/Products"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Nosotros" exact element={<AboutUs />} />
          <Route path="/Alfajores" exact element={<Alfajores />} />
          <Route path="/Tienda" exact element={<Tienda />} />
          <Route path="/Contacto" exact element={<Contact />} />
          <Route path="/Productos" exact element={<Products />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
