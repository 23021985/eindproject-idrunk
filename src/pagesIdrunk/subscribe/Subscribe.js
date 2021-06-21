import {NavLink, Link} from "react-router-dom";
import React, { useRef } from "react";
import {set, useForm} from "react-hook-form";
import Input from "../../components/input/Input";
import "./Subscribe.css"

function Subscribe(){
    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const onSubmit = data => console.log(data);

    return(
<main>
        <form className="formInschrijven" onSubmit={handleSubmit(onSubmit)}>
            <h3>Inschrijven</h3>

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
                name="email-adres"
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
                pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                patternError="Wachtwoord voldoet niet aan de eisen"
            />

            <Input
                name="passwordCheck"
                labelId="passwordCheckId"
                type="text"
                placeholder="Herhaal wachtwoord"
                required={true}
                register={register}
                errors={errors}
                pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                patternError="Wachtwoord voldoet niet aan de eisen"
            />

            <Input
                name="age"
                labelId="ageCheck"
                type="number"
                placeholder="18"
                required={true}
                register={register}
                errors={errors}
                maxLength={3}
                maxLengthError="de leeftijd mag niet meer dan 3 cijfers bevatten"
            />

            {/*<Input*/}
            {/*    name="straat"*/}
            {/*    labelId="straatId"*/}
            {/*    type="text"*/}
            {/*    placeholder="uw straatnaam hier.."*/}
            {/*    register={register}*/}
            {/*    errors={errors}*/}
            {/*    minLength={2}*/}
            {/*    minLengthError="De straatnaam moet minimaal 3 leestekens bevatten"*/}
            {/*/>*/}


            {/*<label htmlFor="voornaam" id="firstNameId">Voornaam*/}
            {/*    <input type="text" placeholder="Voornaam..." name="voornaam" id="voornaam" {...register("voornaam", {required: true, max: 25})}/>*/}
            {/*    {errors.voornaam && errors.voornaam.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}*/}
            {/*</label>*/}

            {/*<label htmlFor="achternaam" id="achternaamId">Achternaam*/}
            {/*    <input type="text" placeholder="Achternaam..." name="achternaam" id="achternaam" {...register("achternaam", {required: true, max: 25})}/>*/}
            {/*    {errors.achternaam && errors.achternaam.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}*/}
            {/*</label>*/}

            {/*<label htmlFor="age" id="ageId">Leeftijd*/}
            {/*    <input type="number" placeholder="Leeftijd..." name="age" id="age" {...register("age", {required: true, min: 18})}/>*/}
            {/*    {errors.age && errors.age.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}*/}
            {/*</label>*/}

            {/*<label htmlFor="postcode">Postcode*/}
            {/*    <input type="text" placeholder="1010AA" name="postcode" id="postcode" {...register("postcode", {required: true, max: 6})} />*/}
            {/*    {errors.postcode && errors.postcode.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}*/}
            {/*</label>*/}

            {/*<label htmlFor="huisnummer">Huisnummer*/}
            {/*    <input type="number"*/}
            {/*           placeholder="123.."*/}
            {/*           name="huisnummer"*/}
            {/*           id="huisnummer"*/}
            {/*           {...register("huisnummer", {required: true, min: 1})}/>*/}
            {/*    {errors.huisnummer && errors.huisnummer.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}*/}
            {/*</label>*/}

            {/*<label htmlFor="password">Wachtwoord:*/}
            {/*    <input*/}
            {/*        id="password"*/}
            {/*        type="password"*/}
            {/*        name="password"*/}
            {/*    />*/}
            {/*</label>*/}

            {/*<label htmlFor="repeat password">*/}
            {/*    Wachtwoord:*/}
            {/*    <input*/}
            {/*        id="repeat password"*/}
            {/*        type="password"*/}
            {/*        name="password"*/}
            {/*    />*/}
            {/*</label>*/}

                <button type= "submit">Aanmelden</button>

                <Link to="/Login" activeClassName="active-link">Inloggen</Link>
        </form>
</main>
)
}

export default Subscribe