import { Routes, Route } from "react-router-dom";
import './App.css';

import Accueil from "./pages/Imala/home/Home.jsx";
import About from "./pages/Imala/About/About.jsx";
import Contact from "./pages/Imala/Contact/Contact.jsx";
import Error from "./pages/Error.jsx";
import PolitiqueConfidentialite from "./pages/Cookies/Confidentialité.jsx";


import Conciergerie from "./pages/Conciergerie/ConciergerieAccueil/ConciergerieAccueil.jsx";
import ServiceConciergerie from "./pages/Conciergerie/ServicesConciergerie/ServiceConciergerie.jsx";
import Abonnement from "./pages/Conciergerie/Abonnement/Abonnement.jsx";
import Loisirs from "./pages/Conciergerie/Loisirs/Loisirs.jsx";





import Construction from "./pages/Construction/Home/Home.jsx";
import ServiceConstruction from "./pages/Construction/Services/Services.jsx";
import Conception from "./pages/Construction/Conception/Conception.jsx";
import Devis from "./pages/Construction/Devis/Devis.jsx";
import Materiaux from "./pages/Construction/Materials/Materials.jsx";
import Plan from "./pages/Construction/Plan/Plan.jsx";
import Realisation from "./pages/Construction/Realisation/Realisations.jsx";


import AirbnbProfil from "./pages/Airbnb/AirbnbProfil/AirbnbProfil.jsx";
import AirbnbLocation from "./pages/Airbnb/AirbnbLocation/AirbnbLocation.jsx";
import AirbnbInscription from "./pages/Airbnb/AirbnbInscription/AirbnbInscription.jsx";
import AirbnbConnexion from "./pages/Airbnb/AirbnbConnexion/AirbnbConnexion.jsx";
import CompteRendu from "./pages/Airbnb/CompteRendu/CompteRendu.jsx";
import Paiement from "./pages/Airbnb/Paiement/Paiement.jsx";
import AirbnbAccueil from "./pages/Airbnb/AirbnbAccueil/AirbnbAccueil.jsx";
import AirbnbProfilClient from "./pages/Airbnb/AirbnbProfilClient/AirbnbProfilClient.jsx";



function App() {


  return (

    <Routes>

      {/* Commun */}
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="/PolitiqueConfidentialite" element={<PolitiqueConfidentialite />} />
      

      {/* Imala */}
      <Route path="/" element={<Accueil />} />
      <Route path="/About" element={<About />} />

      {/* Conciergerie */}
      <Route path="/Conciergerie" element={<Conciergerie />} />
      <Route path="/ServiceConciergerie" element={<ServiceConciergerie />} />
      <Route path="/Abonnement" element={<Abonnement />} />
      <Route path="/Loisirs" element={<Loisirs />} />
    





      {/* Construction */}
      <Route path="/Construction" element={<Construction />} />
      <Route path="/Services" element={<ServiceConstruction />} />
      <Route path="/Conception" element={<Conception />} />
      <Route path="/Devis" element={<Devis />} />
      <Route path="/Materiaux" element={<Materiaux />} />
      <Route path="/Plan" element={<Plan />} />
      <Route path="/Realisation" element={<Realisation />} />

      {/* AirBnb */}
      <Route path="/logements" element={<AirbnbLocation />} />
      <Route path="/reservation" element={<CompteRendu />} />
      <Route path="/paiement" element={<Paiement />} />
      <Route path="/profil" element={<AirbnbProfil />} />
      <Route path="/inscription" element={<AirbnbInscription />} />
      <Route path="/connexion" element={<AirbnbConnexion />} />
      <Route path="/Airbnb" element={<AirbnbAccueil/>} />
      <Route path="/profilClient" element={<AirbnbProfilClient />} />

    </Routes>

  );
}

export default App;
