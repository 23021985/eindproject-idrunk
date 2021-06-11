import React from 'react';
import ButtonMailto from "../components/ButtonMailTo";

function StorkContactPage(props) {
    return (
        <form className="">
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
    );
}

export default StorkContactPage;