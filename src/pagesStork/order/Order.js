import React, {useState, useContext}  from 'react';
import {DrinkContext} from "../../context/DrinksContext";
import "./Order.css";
import Input from "../../components/input/Input";
import {useForm} from "react-hook-form";


// const Drinks = () => {
//     const [drink, setDrink] = useContext(DrinkContext)
const Order = () => {

    const {register, handleSubmit} = useForm()
    const {order, setOrder} = useContext(DrinkContext);
    const drink = [

        {
            name: "Caipiriniha",
            price: "€ 13,50",
            id: 1,
            amount: 0,

        },
        {
            name: "Moscow Mule",
            price: "€ 13,50",
            id: 2,
            amount: 0,
        },
        {
            name: "Bloody Mary",
            price: "€ 13,50",
            id: 3,
            amount: 0,
        },
        {
            name: "Cosmopolitan",
            price: "€ 13,50",
            id: 4,
            amount: 0,
        },
        {
            name: "Mojito",
            price: "€ 13,50",
            id: 5,
            amount: 0,
        },
        {
            name: "Dry Martini",
            price: "€ 13,50",
            id: 6,
            amount: 0,
        },
        {
            name: "Sour",
            price: "€ 13,50",
            id: 7,
            amount: 0,
        },
        {
            name: "Negroni",
            price: "€ 13,50",
            id: 8,
            amount: 0,
        },
        {
            name: "Espresso Martini",
            price: "€ 13,50",
            id: 9,
            amount: 0,
        },
        {
            name: "Taqueray London dry gin - Fevertree Tonic",
            price: "€ 10,50",
            id: 10,
            amount: 0,
        },
        {
            name: "Hendrick's Gin - Fevertree indian Tonic",
            price: "€ 13,50",
            id: 11,
            amount: 0,
        },
        {
            name: "V2C Duch dry gin - Fevertree mediterranian Tonic",
            price: "€ 13,50",
            id: 12,
            amount: 0,
        },
        {
            name: "Hendrick's Gin - Fevertree indian Tonic",
            price: "€ 13,50",
            id: 13,
            amount: 0,
        },
        {
            name: "Scheldebrouwerij zeezuiper tripple 8%",
            price: "€ 5,30",
            id: 14,
            amount: 0,
        },
        {
            name: "Warsteiner pils van de tap",
            price: "€ 3,75",
            id: 15,
            amount: 0,
        },
    ]

    function onSubmit(data) {
        console.log(data)

        // setOrder([
        //     ...order,
        //     data,
        // ]);
    }

    // function onFormSubmit(data) {
    //     console.log("je besteld dit" + data)
    // }

    return (

        <div className="drankContainer">
            <form onSubmit={handleSubmit(onSubmit)} className="menu">

                <div className="drankjes">

                    <div className="caipirinha">
                        <h2>Caipirinha</h2>
                        <h2>{drink[0].name}, {drink[0].price}</h2>
                        <input min="0" type="number" id="Caipirinha" {...register("Caipirinha")}/>
                    </div>

                    <div className="Moscow Mule">
                        <h2>{drink[1].name}, {drink[1].price}</h2>
                        <input min="0" type="number" id="Moscow Mule" {...register("Moscow Mule")}/>
                    </div>

                    <div className="BloodyMary">
                        <h2>{drink[2].name}, {drink[2].price}</h2>
                        <input min="0" type="number" id="BloodyMary" {...register("BloodyMary")}/>
                    </div>

                    <div className="Cosmopolitan">
                        <h2>{drink[3].name}, {drink[3].price}</h2>
                        <input min="0" type="number" id="Cosmopolitan" {...register("Cosmopolitan")}/>
                    </div>

                    <div className="Mojito">
                        <h2>{drink[4].name}, {drink[4].price}</h2>
                        <input min="0" type="number" id="Mojito" {...register("Mojito")}/>
                    </div>

                    <div className="Dry Martini">
                        <h2>{drink[5].name}, {drink[5].price}</h2>
                        <input min="0" type="number" id="Dry Martini" {...register("Dry Martini")}/>
                    </div>

                    <div className="Sour">
                        <h2>{drink[6].name}, {drink[6].price}</h2>
                        <input min="0" type="number" id="Sour" {...register("Sour")}/>
                    </div>

                    <div className="Negroni">
                        <h2>{drink[7].name}, {drink[7].price}</h2>
                        <input min="0" type="number" id="Negroni" {...register("Negroni")}/>
                    </div>

                    <div className="EspressoMartini">
                        <h2>{drink[8].name}, {drink[8].price}</h2>
                        <input min="0" type="number" id="EspressoMartini" {...register("EspressoMartini")}/>
                    </div>

                    <div className="Tanqueray">
                        <h2>{drink[9].name}, {drink[9].price}</h2>
                        <input min="0" type="number" id="Tanqueray" {...register("Tanqueray")}/>
                    </div>

                    <div className="Hendrick">
                        <h2>{drink[10].name}, {drink[10].price}</h2>
                        <input min="0" type="number" id="Hendrick" {...register("Hendrick")}/>
                    </div>

                    <div className="V2C">
                        <h2>{drink[11].name}, {drink[11].price}</h2>
                        <input min="0" type="number" id="V2C" {...register("V2C")}/>
                    </div>

                    <div className="Zeezuiper">
                        <h2>{drink[12].name}, {drink[12].price}</h2>
                        <input min="0" type="number" id="Zeezuiper" {...register("Zeezuiper")}/>
                    </div>

                    <div className="Warsteiner">
                    <h2>{drink[13].name}, {drink[13].price}</h2>
                        <input min="0"  type="number" id="Warsteiner" {...register("Warsteiner")}/>
                    </div>

                    <button type="submit">Plaats uw bestelling</button>
                </div>

            </form>
        </div>


    );

}

export default Order;