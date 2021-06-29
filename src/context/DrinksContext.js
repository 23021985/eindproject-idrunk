// import React, {useState, createContext, useContext} from "react"
//
//
//     export const DrinkContext = createContext({});
//     export const DrinkProvider = ({children}) =>{
//
//
//         let [amount, setAmount] = useState(0);
//         const [counterCaipirinha, setCounterCaipirinha] =useState(0);
//         const [counterMoscowMule, setCounterMoscowMule] = useState(0);
//         const [counterBloodyMary, setCounterBloodyMary] = useState(0);
//         const [counterCosmopolitan, setCounterCosmopolitan] = useState(0);
//         const [counterMojito, setCounterMojito] = useState(0);
//         const [counterDryMartini, setCounterDryMartini] = useState(0);
//         const [counterSour, setCounterSour] = useState(0);
//         const [counterNegroni, setCounterNegroni] = useState(0);
//         const [counterEspressoMartini, setCounterEspressoMartini] = useState(0);
//         const [counterTanqueray, setCounterTanqueray] = useState(0);
//         const [counterHendrick, setCounterHendrick] = useState(0);
//         const [counterV2C, setCounterV2C] = useState(0);
//         const [counterZeezuiper, setCounterZeezuiper] = useState(0);
//         const [counterWarsteiner, setCounterWarsteiner] = useState(0);
//         const [drink, setDrink] = useState([
//
//         {
//             name: "Caipiriniha",
//             price: "€ 13,50",
//             id:  1,
//             amount: 0,
//         },
//         {
//             name: "Moscow Mule",
//             price: "€ 13,50",
//             id:  2,
//
//         },
//         {
//             name: "Bloody Mary",
//             price: "€ 13,50",
//             id:  3,
//
//         },
//         {
//             name: "Cosmopolitan",
//             price: "€ 13,50",
//             id:  4,
//
//         },
//         {
//             name: "Mojito",
//             price: "€ 13,50",
//             id:  5,
//
//         },
//         {
//             name: "Dry Martini",
//             price: "€ 13,50",
//             id:  6,
//             amount: 0,
//         },
//         {
//             name: "Sour",
//             price: "€ 13,50",
//             id:  7,
//             amount: 0,
//         },
//         {
//             name: "Negroni",
//             price: "€ 13,50",
//             id:  8,
//             amount: 0,
//         },
//         {
//             name: "Espresso Martini",
//             price: "€ 13,50",
//             id:  9,
//             amount: 0,
//         },
//         {
//             name: "Tanqueray London dry gin - Fevertree Tonic",
//             price: "€ 10,50",
//             id:  10,
//             amount: 0,
//         },
//         {
//             name: "Hendrick's Gin - Fevertree indian Tonic",
//             price: "€ 13,50",
//             id:  11,
//             amount: 0,
//         },
//         {
//             name: "V2C Duch dry gin - Fevertree mediterranian Tonic",
//             price: "€ 13,50",
//             id:  12,
//             amount: 0,
//         },
//         {
//             name: "Scheldebrouwerij zeezuiper tripple 8%",
//             price: "€ 5,30",
//             id:  13,
//             amount: 0,
//         },
//         {
//             name: "Warsteiner pils van de tap",
//             price: "€ 3,75",
//             id:  14,
//             amount: 0,
//         },
//     ])
//
//         function decreaseCount(setCounter, counter) {
//             if (amount === 0){
//                 setAmount(amount = 0)
//             } else {
//                 setAmount( amount -1)
//             }
//         }
//         function increaseCount(setCounter, counter) {
//             setDrink( drink + 1)
//         }
//
//         return(
//             <DrinkContext.Provider
//                value={{
//                    drink: {drink},
//                    setDrink: {setDrink},
//                    // amount: amount,
//                    // setAmount: setAmount,
//                    counterCaipirinha: {counterCaipirinha},
//                    setCounterCaipirinha: {setCounterCaipirinha},
//                    counterMoscowMule: counterMoscowMule,
//                    setCounterMoscowMule: setCounterMoscowMule,
//                    counterBloodyMary: counterBloodyMary,
//                    setCounterBloodyMary: setCounterBloodyMary,
//                    counterCosmopolitan: counterCosmopolitan,
//                    setCounterCosmopolitan: setCounterCosmopolitan,
//                    counterMojito: counterMojito,
//                    setCounterMojito: setCounterMojito,
//                    counterDryMartini: counterDryMartini,
//                    setCounterDryMartini: setCounterDryMartini,
//                    counterSour: counterSour,
//                    setCounterSour: setCounterSour,
//                    counterNegroni: counterNegroni,
//                    setCounterNegroni: setCounterNegroni,
//                    counterEspressoMartini: counterEspressoMartini,
//                    setCounterEspressoMartini: setCounterEspressoMartini,
//                    counterTanqueray: counterTanqueray,
//                    setCounterTanqueray: setCounterTanqueray,
//                    counterHendrick: counterHendrick,
//                    setCounterHendrick: setCounterHendrick,
//                    counterV2C: counterV2C,
//                    setCounterV2C: setCounterV2C,
//                    counterZeezuiper: counterZeezuiper,
//                    setCounterZeezuiper: setCounterZeezuiper,
//                    counterWarsteiner: counterWarsteiner,
//                    setCounterWarsteiner: setCounterWarsteiner,
//                    decreaseCount: {decreaseCount},
//                    increaseCount: {increaseCount}
//                }}>
//
//
//                 {children}
//             </DrinkContext.Provider>
//
//     );
// }
