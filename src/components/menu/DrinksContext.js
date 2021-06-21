import React, {useState, createContext} from "react"


export const DrinkContext = createContext({});


export const DrinkProvider = (props) =>{
    const [drink, setDrink] = useState([

        {
            name: "Caipiriniha",
            price: "€ 13,50",
            id:  1,
            amount: 0,
        },
        {
            name: "Moscow Mule",
            price: "€ 13,50",
            id:  2,
            amount: 0,
        },
        {
            name: "Bloody Mary",
            price: "€ 13,50",
            id:  3,
            amount: 0,
        },
        {
            name: "Cosmopolitan",
            price: "€ 13,50",
            id:  4,
            amount: 0,
        },
        {
            name: "Mojito",
            price: "€ 13,50",
            id:  5,
            amount: 0,
        },
        {
            name: "Dry Martini",
            price: "€ 13,50",
            id:  6,
            amount: 0,
        },
        {
            name: "Sour",
            price: "€ 13,50",
            id:  7,
            amount: 0,
        },
        {
            name: "Negroni",
            price: "€ 13,50",
            id:  8,
            amount: 0,
        },
        {
            name: "Espresso Martini",
            price: "€ 13,50",
            id:  9,
            amount: 0,
        },
        {
            name: "Taqueray London dry gin - Fevertree Tonic",
            price: "€ 10,50",
            id:  10,
            amount: 0,
        },
        {
            name: "Hendrick's Gin - Fevertree indian Tonic",
            price: "€ 13,50",
            id:  11,
            amount: 0,
        },
        {
            name: "V2C Duch dry gin - Fevertree mediterranian Tonic",
            price: "€ 13,50",
            id:  12,
            amount: 0,
        },
        {
            name: "Hendrick's Gin - Fevertree indian Tonic",
            price: "€ 13,50",
            id:  13,
            amount: 0,
        },
        {
            name: "Scheldebrouwerij zeezuiper tripple 8%",
            price: "€ 5,30",
            id:  14,
            amount: 0,
        },
        {
            name: "Warsteiner pils van de tap",
            price: "€ 3,75",
            id:  15,
            amount: 0,
        },

    ])
        return(
            <DrinkContext.Provider
               value={{
                   drink: drink,
                   setDrink: setDrink,
               }}>

                {props.children}
            </DrinkContext.Provider>

    );
}