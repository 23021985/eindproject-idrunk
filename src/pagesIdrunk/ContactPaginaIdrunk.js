import React from 'react';
import {Link} from "react-router-dom";
import ButtonMailto from "../components/ButtonMailTo";

function ContactPaginaIdrunk(props) {
    return (

            <form id="formContactIdrunk">
                <h1>Contact met Idrunk?</h1>

                <h2>
                    Bedrijventerein het bedrijf
                    waterkant 123
                    1020 XX Purmerend

                    tel: 06 123 456 78</h2>
                    e-mail adres: <ButtonMailto label="Stuur een e-mail" mailto="mailto:info.idrunk@yahoo.com" />

            </form>

    );
}

export default ContactPaginaIdrunk;