import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Footer.css"
function Footer(){


    return(

           <footer>

               <label id="logoContainer">
                       <div id="logo1"></div>
                       <div id="logo2"></div>
                       <div id="logo3"></div>
                   </label>

               <div className={"buttons"}>
                   <ul>

                       <li>
                           <Link to="/Locaties" activeClassName="active-link">Locaties</Link>
                       </li>

                       <li>
                           <Link to="/Login" activeClassName="active-link">Login</Link>
                       </li>

                       <li>
                           <Link to="/Contact" activeClassName="active-link">Contact</Link>
                       </li>

                   </ul>
               </div>

           </footer>

    );
}

export default Footer;