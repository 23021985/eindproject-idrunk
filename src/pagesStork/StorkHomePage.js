import React from 'react';
import {Link, NavLink} from "react-router-dom";

function StorkHomePage(props) {
    return (
        <div>
            <h1>Welkom bij bar Stork!</h1>


            <Link to="/storkContactPage" activeClassName="active-link">StorkContactPage</Link>
        </div>
    );
}

export default StorkHomePage;