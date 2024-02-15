import React from "react";

import { Fade } from "react-swift-reveal";

export default function Contact() {
  return (
    <Fade>
      {/* section titre */}
      <section className="section_contact_conciergerie" id="section_contact_conciergerie">
        <h2>Nous Contacter</h2>

         {/* section contenu */}
        <div className="contact_contenu_conciergerie">
             {/* colonne  carré + imagee */}
          <div className="contact_img_conciergerie">
            <div className="contact_square_conciergerie">l</div>
            <img
              src="https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="img_contact-section"
            />
          </div>
           {/* section texte */}
          <div className="contact_txt_conciergerie">
            <h3>Besoin d'aide ?</h3>
            <p>
              Pour toute question ou demande d'information, n'hésitez pas à nous
              contacter. Notre équipe est là pour vous accompagner et vous
              fournir une assistance personnalisée. Nous sommes à votre écoute
              pour vous garantir une expérience exceptionnelle."
            </p>
            <form method="get" action="Contact">
              <button type="submit"> Poursuivre</button>
            </form>
          </div>
        </div>
      </section>
    </Fade>
  );
}
