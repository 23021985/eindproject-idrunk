import {NavLink, Link, useHistory} from "react-router-dom";
import React, { useRef, useState } from "react";
import {set, useForm} from "react-hook-form";
import Input from "../../components/input/Input";
import "./Subscribe.css"
import axios from "axios";

    function Subscribe(){
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const history = useHistory();
    const {register, handleSubmit, formState:{errors}, watch} = useForm();


        async function onSubmit(data) {
            setError('');
            toggleLoading(true);

            console.log(data);

            try {
                const result = await axios.post('http://localhost:8084/users/register', {
                    username: data.username,
                    firstName: data.voornaam,
                    lastName: data.achternaam,
                    age: data.leeftijd,
                    email: data.email,
                    password: data.password,

                    // token: data.accessToken

                });

                const postRole = await axios.post(`http://localhost:8084/users/${data.username}/authorities`, {
                    username: data.username,
                    authority: "USER"
                })
                // als deze console.log wordt uitgevoerd is alles goedgegaan, want we zijn niet naar het catch blok gesprongen
                // in de console zie je de gebruikelijke respons en daarin ook 'status: 201'
                console.log(result);

                toggleRegisterSuccess(true);

                // we willen even wachten met doorlinken zodat de gebruiker de tijd heeft om de succesmelding ook daadwerkelijk te zien
                setTimeout(() => {
                    history.push('/login');
                }, 2000);
            } catch(e) {
                console.error(e);
                // op het error (e) object zit altijd een message property, maar die kan wat abstract zijn. Daarom extra text:
                setError(`Het registeren is mislukt. Probeer het opnieuw (${e.message})`);

            }
            toggleLoading(false);
        }


    return(
        <main>
            <form className="formInschrijven" onSubmit={handleSubmit(onSubmit)}>
                <h3>Inschrijven</h3>


                <Input
                    name="username"
                    labelId="usernameID"
                    type="text"
                    placeholder="username.."
                    required={true}
                    register={register}
                    errors={errors}
                    minLength={4}
                    minLengthError="De username moet minimaal 4 characters bevatten"
                    maxLength={15}
                    maxLengthError="De username mag maximaal 15 characters bevatten"
                />

                <Input
                name="voornaam"
                labelId="voornaamID"
                type="text"
                placeholder="Voornaam.."
                required={true}
                register={register}
                errors={errors}
                minLength={4}
                minLengthError="De voornaam moet minimaal 4 characters bevatten"
                maxLength={15}
                maxLengthError="De voornaam mag maximaal 15 characters bevatten"
                />

                <Input
                    name="achternaam"
                    labelId="achternaamID"
                    type="text"
                    placeholder="Achternaam.."
                    required={true}
                    register={register}
                    errors={errors}
                    minLength={4}
                    minLengthError="De achternaam moet minimaal 4 characters bevatten"
                    maxLength={15}
                    maxLengthError="De achternaam mag maximaal 15 characters bevatten"
                />

                <Input
                    name="email"
                    labelId="emailId"
                    type="text"
                    placeholder="e-mail adres"
                    required={true}
                    register={register}
                    errors={errors}
                    pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                    patternError="Please enter a valid e-mail adress"
                />

                <Input
                    name="password"
                    labelId="passwordId"
                    type="password"
                    placeholder="Wachtwoord"
                    required={true}
                    register={register}
                    errors={errors}
                    // pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                   pattern={errors.password && errors.password.type === "pattern" && <span className="errormessage-pattern">Het wachtwoord moet minimaal 1 Hoofdletter, 1 kleine letter en een cijfer bevatten</span>}
                    patternError="Wachtwoord voldoet niet aan de eisen"
                />

                <Input
                    name="passwordCheck"
                    labelId="passwordCheckId"
                    type="password"
                    placeholder="Herhaal wachtwoord"
                    required={true}
                    register={register}
                    errors={errors}
                    pattern={errors.password && errors.password.type === "pattern" && <span className="errormessage-pattern">Het wachtwoord moet minimaal 1 Hoofdletter, 1 kleine letter en een cijfer bevatten</span>}
                    // pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                    patternError="Wachtwoord voldoet niet aan de eisen"
                />

                <Input
                    name="leeftijd"
                    labelId="ageCheck"
                    type="number"
                    placeholder="18"
                    required={true}
                    register={register}
                    errors={errors}
                    maxLength={3}
                    maxLengthError="de leeftijd mag niet meer dan 3 cijfers bevatten"
                />

                <button type= "submit"  disabled={loading}>{loading ? 'Versturen...' : 'Maak account aan'}</button>
                {registerSuccess === true &&  <p>Registeren is gelukt! Je wordt nu doorgestuurd naar de inlog pagina!</p>}
                {error && <p className="error-message">{error}</p>}

                <p>Heb je al een account? Je kunt je <Link to="/Login" activeClassName="active-link">hier</Link> inloggen.</p>
            </form>

        </main>
    )
}

export default Subscribe