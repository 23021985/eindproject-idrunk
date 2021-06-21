import React, {useContext} from 'react';
import {DrinkContext} from "../../components/menu/DrinksContext";

// const Drinks = () => {
//     const [drink, setDrink] = useContext(DrinkContext)
const Order = () => {
// const Alles = useContext(DrinkContext) // altijd eerst even deze + de console.log
//     console.log(Alles);

    // const alles = useContext(DrinkContext); // in alles zitten de properties drink en setDrink
// Dit kun je destructuren

    // function menu()

    const { drink, setDrink } = useContext(DrinkContext);
    return (
        <div className="drankenkaart">
            {drink.map(function (name, price){
                return name, price
                console.log(name);
                console.log(price)
            }) }

            {/*{drink.map(() => {*/}
            {/*    return {drink}*/}
            {/*})}*/}

            {/*{drink.map(() => {*/}
            {/*    return{drink.name}*/}
            {/*})}*/}


            {/*<h2>de drankenkaart bestaat uit {{drink}}</h2>*/}
            {/*<h2>de drankenkaart bestaat uit {drink}</h2>*/}
            {/*<h2>de drankenkaart bestaat uit {drink.length}</h2>  /!*geeft 15*!/*/}
            {/*/\<h2>de drankenkaart bestaat uit {drink.children}</h2>*/}
            <h2>de drankenkaart bestaat uit {drink[0].name} en deze kost € {drink[0].price}</h2>
            {/*<h2>de drankenkaart bestaat uit {drink[1]}</h2>  MAG NIET!*/}
            {/*<h2>de drankenkaart bestaat uit {drink.key.name}</h2> MAG NIET*/}


            <h1>hier komt de bestelpagina</h1>
            <br/>
            <h2>hier komt dan een barkaart</h2>
            <br/>
            <h3>hier houden we de rekening bij</h3>
            <br/>

        </div>
    );
}

export default Order;