import React, {useContext} from 'react';
import {DrinkContext} from "../../context/DrinksContext";
import "./Order.css";



// const Drinks = () => {
//     const [drink, setDrink] = useContext(DrinkContext)
const Order = () => {
// const Alles = useContext(DrinkContext) // altijd eerst even deze + de console.log
//     console.log(Alles);

    // const alles = useContext(DrinkContext); // in alles zitten de properties drink en setDrink
// Dit kun je destructureren

    // function menu()

    // let { amount, setAmount } = useContext(DrinkContext);

    let { drink, setDrink, amount, setAmount, addDrink, deleteDrink } = useContext(DrinkContext);

    // const counter = amount;
    //VERPLAATST NAAR DE CONSTEXT

    // function addDrink(){
    //     setDrink(drink.amount + amount[1]);
    //     console.log(drink.amount)
    //     // return(drink = (setDrink.amount +1));
    // }
    //
    // function deleteDrink(){
    //     // setDrink[drink.amount-1];
    //     // return({drink.amount = setDrink -1})
    // }

    return (
        <div className="drankContainer">
            <div className="menu">

                      {drink.map((drink)=>(
                        <h2> {drink.name} {drink.price}
                            <p>aantal:</p>
                            <button onClick={(e)=>deleteDrink}>-</button>
                            {drink.amount}
                            <button onClick={(event)=>addDrink(amount)}>+</button>
                        </h2>

                    ))}

            </div>
        </div>
    );
}

export default Order;