import { Routes, Route } from "react-router-dom";

import "./index.css";
import './App.css';

import Accueil from "./pages/Imala/Home.jsx";
import About from "./pages/Imala/About.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";

import HomeConciergerie from "./pages/Conciergerie/HomeConciergerie.jsx";
import ServiceConciergerie from "./pages/Conciergerie/ServiceConciergerie.jsx";
import Abonnement from "./pages/Conciergerie/Abonnement.jsx";
import Loisirs from "./pages/Conciergerie/Loisirs.jsx";

import HomeConstruction from "./pages/Construction/HomeConstruction.jsx";
import ServiceConstruction from "./pages/Construction/ServiceConstruction.jsx";
import Conception from "./pages/Construction/Conception.jsx";
import Devis from "./pages/Construction/Devis.jsx";
import Materiaux from "./pages/Construction/Materiaux.jsx";
import Plan from "./pages/Construction/Plan.jsx";
import Realisation from "./pages/Construction/Realisation.jsx";


function App() {
  return (
    <Routes>


      {/* Commun */}
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />

      {/* Imala */}
      <Route path="/" element={<Accueil />} />
      <Route path="/About" element={<About />} />

      {/* Conciergerie */}
      <Route path="/HomeConciergerie" element={<HomeConciergerie />} />
      <Route path="/ServiceConciergerie" element={<ServiceConciergerie/>} />
      <Route path="/Abonnement" element={<Abonnement />} />
      <Route path="/Loisirs" element={<Loisirs />} />
           
      {/* Construction */}
      <Route path="/HomeConstruction" element={<HomeConstruction />} />
      <Route path="/ServiceConstruction" element={<ServiceConstruction />} />
      <Route path="/Conception" element={<Conception />} />
      <Route path="/Devis" element={<Devis />} />
      <Route path="/Materiaux" element={<Materiaux />} />
      <Route path="/Plan" element={<Plan />} />
      <Route path="/Realisation" element={<Realisation />} />
      
      {/* AirBnb */}



    </Routes>
  );
}

export default App;
