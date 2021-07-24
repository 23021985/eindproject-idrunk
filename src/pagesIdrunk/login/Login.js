import React from 'react';
import {NavLink, Link} from "react-router-dom";
import "./Login.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react"
import Input from "../../components/input/Input";

function Login() {

    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const { login } = useContext(AuthContext);


    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8084/authenticate', data);
            console.log(result);
            login(result.data.jwt);
        } catch(e) {
            console.error(e, "helaas, er is iets mis gegaan");
        }
    }

    return (
    <main>
        <form className="formLogin-holder" onSubmit={handleSubmit(onSubmit)}>
                <div className="formLogin">
                    <h3>Inloggen</h3>

                    <label htmlFor="username" className="loginLabel">
                        Gebruikersnaam:


                        <Input
                            name="username"
                            labelId="usernameId"
                            type="text"
                            placeholder="Username.."
                            required={true}
                            register={register}
                            errors={errors}
                            patternError="Please enter a valid e-mail adress"
                        />
                    </label>

                    <label htmlFor="password" className="loginLabel">
                        Wachtwoord:
                        <Input
                            name="password"
                            labelId="passwordId"
                            type="password"
                            placeholder="Wachtwoord"
                            required={true}
                            register={register}
                            errors={errors}
                            pattern={errors.password && errors.password.type === "pattern" && <span className="errormessage-pattern">Het wachtwoord moet minimaal 1 Hoofdletter, 1 kleine letter en een cijfer bevatten</span>}
                            patternError="Wachtwoord voldoet niet aan de eisen"
                        />
                    </label>

                    <button type="submit">Inloggen</button>
                    <Link to="/subscribe" activeClassName="active-link">Inschrijven</Link>
                    {/*<Link to="/lostpassword" style={{color: 'white',textDecoration: 'none'}}>Wachtwoord vergeten?</Link></div>*/}
                </div>
        </form>
    </main>

    );
}
export default Login;