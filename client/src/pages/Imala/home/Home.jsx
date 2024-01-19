import React from 'react'
import Navbar from '../../../components/Header/NavbarImala.jsx';
import './Home.css'



import ban from '../../../media/videos/drone.mp4'




export default function Main() {



  return (
    <main className="main_accueil">
      <Navbar/>
      <div className=" section ban">
        <h1>IMALA</h1>
        <h2>'Limmobilier dans toute sa splendeur'</h2>
      </div>

      <div className="banniere_accueil">
        <video id="background-video" autoPlay loop muted>
          <source src={ban} type="video/mp4" />
        </video>
      </div>

     
     
    </main>
  );
}
