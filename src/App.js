import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import A Propos from "./pages/A Propos";
import Fiche-logement from "./pages/Fiche-logement";
import 404 from "./pages/404";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A propos" element={<A Propos />} />
        <Route path="/Fiche-logement" element={<Fiche-logement />} />
        <Route path="*" element={< 404 />} />
      </Routes>


    </BrowserRouter>
  );
};

export default App;