import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./StorkHomePage.css"

function StorkHomePage(props) {
    return (
        <div className="storkHomePageHolder">
        <div className="storkHome">
            <h1>Welkom bij bar Stork!</h1>

            <Link to="/stork/reserveren" activeClassName="active-link">Stork Reserveren</Link>
            <Link to="/storkContactPage" activeClassName="active-link">Stork Contact</Link>
            <Link to="/stork/order" activeClassName="active-link">Stork Order</Link>
        </div>
        </div>
    );
}

export default StorkHomePage;