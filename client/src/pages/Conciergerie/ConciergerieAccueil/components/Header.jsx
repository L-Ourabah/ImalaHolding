import React from 'react'

export default function Header() {
  return (
    <header class="header_accueil_conciergerie">

   <div className="header_accueil_bg">
     <img
       src="https://images.pexels.com/photos/18189721/pexels-photo-18189721/free-photo-of-ville-rue-ete-maison.jpeg?auto=compress&cs=tinysrgb&w=1600"
       alt="banniere"
       srcSet=""
       id="header_img_conciergerie"
     />
   </div>


   <div className="header_titre_conciergerie">
     <h1>

       <span id="titre_logo_conciergerie"> IMALA </span>
       <br /> - Conciergerie -
     </h1>
   </div>
 </header>
  )
}
