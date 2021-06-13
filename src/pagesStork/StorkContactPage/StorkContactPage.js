import React from 'react';
import ButtonMailto from "../../components/ButtonMailTo";
import "./StorkContactPage.css"

function StorkContactPage(props) {
    return (
        <div className="storkContactHolder">
        <form className="formStork">
            <h1>Contactgegevens</h1>
            <p className="adresgegevens">
                Straat: Gedempt Hamerkanaal 201,
                Postcode: 1021 KP
                Stad: Amsterdam</p>
            <p>
                telefoon nummer: 020 634 4000
                e-mail adres: <ButtonMailto label="Stuur een e-mail" mailto="mailto:info@restaurantstork.nl" />
            </p>




        </form>

            <div className="kaartHolder">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.3558540540494!2d4.918555715802301!3d52.382099079788325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609abaa350573%3A0xd919f46114890338!2sCaf%C3%A9-Restaurant%20Stork!5e0!3m2!1snl!2snl!4v1623507179242!5m2!1snl!2snl"
                    width="500" height="400" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
}

export default StorkContactPage;