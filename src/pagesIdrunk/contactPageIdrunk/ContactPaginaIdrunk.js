import React from 'react';
import {Link} from "react-router-dom";
import ButtonMailto from "../../components/ButtonMailTo";
import "./ContactPaginaIdrunk.css"

function ContactPaginaIdrunk(props) {
    return (
        <div className="contactHolder">
            <form className="formContactIdrunk">
                <h1>Contact met Idrunk?</h1>

                <h2>
                    Bedrijventerein het bedrijf
                    waterkant 123 <br/>
                    1020 XX Purmerend
                <br/>
                    tel: 06 123 456 78</h2>
                    e-mail adres: <ButtonMailto label="Stuur een e-mail" mailto="mailto:info.idrunk@yahoo.com" />

            </form>
        </div>
    );
}

export default ContactPaginaIdrunk;