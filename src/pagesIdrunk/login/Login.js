import React from 'react';
import {NavLink, Link} from "react-router-dom";
import "./Login.css"
import {useForm} from "react-hook-form";

function Login() {

    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const onSubmit = data => console.log(data);

    return (
<main>
    <form className="formLogin-holder"  onSubmit={handleSubmit(onSubmit)}>
            <div className="formLogin">
                <h3>Inloggen</h3>

                <label htmlFor="username" className="loginLabel">
                    Gebruikersnaam:
                    <input
                        id="username"
                        type="text"
                        name="username"
                    />
                </label>

                <label htmlFor="password" className="loginLabel">
                    Wachtwoord:
                    <input
                        id="password"
                        type="password"
                        name="password"
                    />
                </label>

                <button type= "submit">Inschrijven</button>
                <Link to="/subscribe" activeClassName="active-link">Inschrijven</Link>
            </div>
    </form>
</main>


    );
}

export default Login;