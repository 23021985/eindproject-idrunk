import React, {useState} from 'react';
import Drinks from "./Drinks";
import {DrinkContext} from "../../context/DrinksContext";
import {useContext} from "react/cjs/react.production.min";

const DrinksList = () => {
        // const [drink, setDrink] = useState([
        //
        //     {
        //         name: "Caipiriniha",
        //         price: "€ 13,50",
        //         id:  1
        //     },
        //     {
        //         name: "Moscow Mule",
        //         price: "€ 13,50",
        //         id:  2
        //     },
        //     {
        //         name: "Bloody Mary",
        //         price: "€ 13,50",
        //         id:  3
        //     },
        //     {
        //         name: "Cosmopolitan",
        //         price: "€ 13,50",
        //         id:  4
        //     },
        //     {
        //         name: "Mojito",
        //         price: "€ 13,50",
        //         id:  5
        //     },
        //     {
        //         name: "Dry Martini",
        //         price: "€ 13,50",
        //         id:  6
        //     },
        //     {
        //         name: "Sour",
        //         price: "€ 13,50",
        //         id:  7
        //     },
        //     {
        //         name: "Negroni",
        //         price: "€ 13,50",
        //         id:  8
        //     },
        //     {
        //         name: "Espresso Martini",
        //         price: "€ 13,50",
        //         id:  9
        //     },
        //     {
        //         name: "Taqueray London dry gin - Fevertree Tonic",
        //         price: "€ 10,50",
        //         id:  10
        //     },
        //     {
        //         name: "Hendrick's Gin - Fevertree indian Tonic",
        //         price: "€ 13,50",
        //         id:  11
        //     },
        //     {
        //         name: "V2C Duch dry gin - Fevertree mediterranian Tonic",
        //         price: "€ 13,50",
        //         id:  12
        //     },
        //     {
        //         name: "Hendrick's Gin - Fevertree indian Tonic",
        //         price: "€ 13,50",
        //         id:  13
        //     },
        //     {
        //         name: "Scheldebrouwerij zeezuiper tripple 8%",
        //         price: "€ 5,30",
        //         id:  14
        //     },
        //     {
        //         name: "Warsteiner pils van de tap",
        //         price: "€ 3,75",
        //         id:  15
        //     },
        //
        // ])
    const value = useContext(DrinkContext)
    return (
        <div>
            <h3>

            </h3>
        </div>
    );
}

export default DrinksList;