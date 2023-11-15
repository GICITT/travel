import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        {" "}
        <NavBar />
        <Routes>
          <Route path="/sign-up" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>{" "}
    </>
  );
}

export default App;
