import { Routes, Route } from "react-router-dom";
import './App.css';


/*Global */
import Accueil from "./pages/Imala/home/Home.jsx";
import About from "./pages/Imala/About/About.jsx";
import Contact from "./pages/Imala/Contact/Contact.jsx";
import Error from "./pages/Error.jsx";
import PolitiqueConfidentialite from "./pages/Cookies/Confidentialité.jsx";

/*Conciergerie */
import Conciergerie from "./pages/Conciergerie/ConciergerieAccueil/ConciergerieAccueil.jsx";
import ServiceConciergerie from "./pages/Conciergerie/ServicesConciergerie/ServiceConciergerie.jsx";
import Abonnement from "./pages/Conciergerie/Abonnement/Abonnement.jsx";

/* Activité Conciergerie */
import Garderie from './pages/Conciergerie/Activite/Garderie/Garderie.jsx'
import GuideTour from './pages/Conciergerie/Activite/GuideTour/GuideTour.jsx'
import Loisirs from './pages/Conciergerie/Activite/Loisirs/Loisirs.jsx'
import Nettoyage from './pages/Conciergerie/Activite/Nettoyage/Nettoyage.jsx'
import Traiteur from './pages/Conciergerie/Activite/Traiteur/Traiteur.jsx'
import Transport from './pages/Conciergerie/Activite/Transport/Transport.jsx'
/* Détails activites conciergerie   */
import GarderieDetails from "./pages/Conciergerie/Activite/Garderie/GarderieDetails.jsx";
import GuidetourDetails from "./pages/Conciergerie/Activite/GuideTour/GuideTourDetails.jsx"
import LoisirsDetails from "./pages/Conciergerie/Activite/Loisirs/LoisirsDetails.jsx";
import NettoyageDetails from "./pages/Conciergerie/Activite/Nettoyage/NettoyageDetails.jsx";
import TraiteurDetails from "./pages/Conciergerie/Activite/Traiteur/TraiteurDetails.jsx";
import TransportDetails from "./pages/Conciergerie/Activite/Transport/TransportDetails.jsx";


/* Construction */
import Construction from "./pages/Construction/Home/Home.jsx";
import ServiceConstruction from "./pages/Construction/Services/Services.jsx";
import Conception from "./pages/Construction/Conception/Conception.jsx";
import Devis from "./pages/Construction/Devis/Devis.jsx";
import Materiaux from "./pages/Construction/Materials/Materials.jsx";
import Plan from "./pages/Construction/Plan/Plan.jsx";
import Realisation from "./pages/Construction/Realisation/Realisations.jsx";

/* Location */
import AirbnbProfil from "./pages/Airbnb/AirbnbProfil/AirbnbProfil.jsx";
import AirbnbLocation from "./pages/Airbnb/AirbnbLocation/AirbnbLocation.jsx";
import AirbnbInscription from "./pages/Airbnb/AirbnbInscription/AirbnbInscription.jsx";
import AirbnbConnexion from "./pages/Airbnb/AirbnbConnexion/AirbnbConnexion.jsx";
import CompteRendu from "./pages/Airbnb/CompteRendu/CompteRendu.jsx";
import Paiement from "./pages/Airbnb/Paiement/Paiement.jsx";
import AirbnbAccueil from "./pages/Airbnb/AirbnbAccueil/AirbnbAccueil.jsx";
import AirbnbProfilClient from "./pages/Airbnb/AirbnbProfilClient/AirbnbProfilClient.jsx";
import AirbnbContact from "./pages/Airbnb/AirbnbContact/AirbnbContact.jsx"



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
      <Route path="/AirbnbContact" element ={<AirbnbContact/>} />
      {/* Route des  activités  */}
      <Route path="/ServiceConciergerie/garderie" element={<Garderie/>} />
      <Route path="/ServiceConciergerie/guidetouristique" element={<GuideTour/>} />
      <Route path="/ServiceConciergerie/loisirs" element={<Loisirs/>} />
      <Route path="/ServiceConciergerie/nettoyage" element={<Nettoyage/>} />
      <Route path="/ServiceConciergerie/traiteur" element={<Traiteur/>} />
      <Route path="/ServiceConciergerie/transport" element={<Transport/>} />

      {/* Route détails des  activités  */}
      <Route path="/ServiceConciergerie/garderie/:id" element={<GarderieDetails/>} />
     <Route path="/ServiceConciergerie/guidetouristique/:id" element={<GuidetourDetails/>} />
     <Route path="/ServiceConciergerie/loisirs/:id" element={<LoisirsDetails/>} />
     <Route path="/ServiceConciergerie/nettoyage/:id" element={<NettoyageDetails/>} />
     <Route path="/ServiceConciergerie/transport/:id" element={<TransportDetails/>} />
     <Route path="/ServiceConciergerie/traiteur/:id" element={<TraiteurDetails/>} />
   


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
      <Route path="/AirbnbContact" element ={<AirbnbContact/>} />

    </Routes>

  );
}

export default App;
