import React from 'react'
import "./SectionContact.css"

export default function SectionContact() {
    return (
        <section className="contact">
            <h2 >Nous Contacter</h2>
            <div className="contact_content">
                <p>
                    Pour toute question ou information à propos de nos services, vous pouvez nous joindre par message
                    et nous nous efforcerons de vous faire un retour.
                </p>
                <button id="btn_contact">Voir plus </button>
            </div>
            <hr></hr>
            <h2>Inscrivez-vous à notre Newsletter</h2>
            <div className="news_content">
                <p>c Lorem ipsum dolor sit amet. In pariatur quidem 33 quis aperiam aut
                    quisquam quia qui quas unde?</p>
                <div className="news_form">
                    <form>
                        <input type="text" />
                        <button id="btn_news">S'abonner</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
