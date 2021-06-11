import React from 'react';
import {NavLink, Link} from "react-router-dom";

function Login() {
    return (
<main>
            <form id="formLogin">
                <h3>Inloggen</h3>

                <label htmlFor="username">
                    Gebruikersnaam:
                    <input id="username" type="text" name="username"/>
                </label>

                <label htmlFor="password">
                    Wachtwoord:
                    <input id="password" type="password" name="password"/>
                </label>


                <Link to="/subscribe" activeClassName="active-link">Inschrijven</Link>
            </form>
</main>


    );
}

export default Login;