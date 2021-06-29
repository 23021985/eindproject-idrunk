import React, {useState} from 'react';
import {DrinkContext} from "../../context/DrinksContext";
import "./Order.css";



// const Drinks = () => {
//     const [drink, setDrink] = useContext(DrinkContext)
const Order = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    const [counterCaipirinha, setCounterCaipirinha] =useState(0);
    const [counterMoscowMule, setCounterMoscowMule] = useState(0);
    const [counterBloodyMary, setCounterBloodyMary] = useState(0);
    const [counterCosmopolitan, setCounterCosmopolitan] = useState(0);
    const [counterMojito, setCounterMojito] = useState(0);
    const [counterDryMartini, setCounterDryMartini] = useState(0);
    const [counterSour, setCounterSour] = useState(0);
    const [counterNegroni, setCounterNegroni] = useState(0);
    const [counterEspressoMartini, setCounterEspressoMartini] = useState(0);
    const [counterTanqueray, setCounterTanqueray] = useState(0);
    const [counterHendrick, setCounterHendrick] = useState(0);
    const [counterV2C, setCounterV2C] = useState(0);
    const [counterZeezuiper, setCounterZeezuiper] = useState(0);
    const [counterWarsteiner, setCounterWarsteiner] = useState(0);

    const drink = [

        {
            name: "Caipiriniha",
            price: "€ 13,50",
            id: 1,

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

    return (
        <div className="drankContainer">
            <form onSubmit={handleSubmit} className="menu">

                <div className="drankjes">

                    <div className="caipirinha">
                        <h2>{drink[0].name}, {drink[0].price}</h2>
                        <button disabled={counterCaipirinha === 0} onClick={() => setCounterCaipirinha(counterCaipirinha - 1)}>-</button>
                        {counterCaipirinha}
                        <button onClick={() => setCounterCaipirinha(counterCaipirinha + 1)}>+</button>
                    </div>

                    <div className="Moscow Mule">
                        <h2>{drink[1].name}, {drink[1].price}</h2>
                        <button disabled={counterMoscowMule === 0} onClick={() => setCounterMoscowMule(counterMoscowMule - 1)}>-</button>
                        {counterMoscowMule}
                        <button onClick={() => setCounterMoscowMule(counterMoscowMule + 1)}>+</button>
                    </div>

                    <div className="BloodyMary">
                        <h2>{drink[2].name}, {drink[2].price}</h2>
                        <button disabled={counterBloodyMary === 0} onClick={() => setCounterBloodyMary(counterBloodyMary - 1)}>-</button>
                        {counterBloodyMary}
                        <button onClick={() => setCounterBloodyMary(counterBloodyMary + 1)}>+</button>
                    </div>

                    <div className="Cosmopolitan">
                        <h2>{drink[3].name}, {drink[3].price}</h2>
                        <button disabled={counterCosmopolitan === 0} onClick={() => setCounterCosmopolitan(counterCosmopolitan - 1)}>-</button>
                        {counterCosmopolitan}
                        <button onClick={() => setCounterCosmopolitan(counterCosmopolitan + 1)}>+</button>
                    </div>

                    <div className="Mojito">
                        <h2>{drink[4].name}, {drink[4].price}</h2>
                        <button disabled={counterMojito === 0} onClick={() => setCounterMojito(counterMojito - 1)}>-</button>
                        {counterMojito}
                        <button onClick={() => setCounterMojito(counterMojito + 1)}>+</button>
                    </div>

                    <div className="Dry Martini">
                        <h2>{drink[5].name}, {drink[5].price}</h2>
                        <button disabled={counterDryMartini === 0} onClick={() => setCounterDryMartini(counterDryMartini - 1)}>-</button>
                        {counterDryMartini}
                        <button onClick={() => setCounterDryMartini(counterDryMartini + 1)}>+</button>
                    </div>

                    <div className="Sour">
                        <h2>{drink[6].name}, {drink[6].price}</h2>
                        <button disabled={counterSour === 0} onClick={() => setCounterSour(counterSour - 1)}>-</button>
                        {counterSour}
                        <button onClick={() => setCounterSour(counterSour + 1)}>+</button>
                    </div>

                    <div className="Negroni">
                        <h2>{drink[7].name}, {drink[7].price}</h2>
                        <button disabled={counterNegroni === 0} onClick={() => setCounterNegroni(counterNegroni - 1)}>-</button>
                        {counterNegroni}
                        <button onClick={() => setCounterNegroni(counterNegroni + 1)}>+</button>
                    </div>

                    <div className="EspressoMartini">
                        <h2>{drink[8].name}, {drink[8].price}</h2>
                        <button disabled={counterEspressoMartini === 0} onClick={() => setCounterEspressoMartini(counterEspressoMartini - 1)}>-</button>
                        {counterEspressoMartini}
                        <button onClick={() => setCounterEspressoMartini(counterEspressoMartini + 1)}>+</button>
                    </div>

                    <div className="Tanqueray">
                        <h2>{drink[9].name}, {drink[9].price}</h2>
                        <button disabled={counterTanqueray === 0} onClick={() => setCounterTanqueray(counterTanqueray - 1)}>-</button>
                        {counterTanqueray}
                        <button onClick={() => setCounterTanqueray(counterTanqueray + 1)}>+</button>
                    </div>

                    <div className="Hendrick">
                        <h2>{drink[10].name}, {drink[10].price}</h2>
                        <button disabled={counterHendrick === 0} onClick={() => setCounterHendrick(counterHendrick - 1)}>-</button>
                        {counterHendrick}
                        <button onClick={() => setCounterHendrick(counterHendrick + 1)}>+</button>
                    </div>

                    <div className="V2C">
                        <h2>{drink[11].name}, {drink[11].price}</h2>
                        <button disabled={counterV2C === 0} onClick={() => setCounterV2C(counterV2C - 1)}>-</button>
                        {counterV2C}
                        <button onClick={() => setCounterV2C(counterV2C + 1)}>+</button>
                    </div>

                    <div className="Zeezuiper">
                        <h2>{drink[12].name}, {drink[12].price}</h2>
                        <button disabled={counterZeezuiper === 0} onClick={() => setCounterZeezuiper(counterZeezuiper - 1)}>-</button>
                        {counterZeezuiper}
                        <button onClick={() => setCounterZeezuiper(counterZeezuiper + 1)}>+</button>
                    </div>

                    <div className="drankje">
                        <h2>{drink[13].name}, {drink[13].price}</h2>
                        <button disabled={counterWarsteiner === 0} onClick={() => setCounterWarsteiner(counterWarsteiner - 1)}>-</button>
                        {counterWarsteiner}
                        <button onClick={() => setCounterWarsteiner(counterWarsteiner + 1)}>+</button>
                    </div>
                </div>

            </form>
        </div>

    );
}

export default Order;