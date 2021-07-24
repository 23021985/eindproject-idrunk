import React from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import "./Footer.css"
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function Footer(){
    // const history = useHistory();
    // const {
    //     logout,
    //     authState: { user },
    // } = useContext(AuthContext);
    return(

           <footer>

               <label id="logoContainer">
                       <div id="logo1"></div>
                       <div id="logo2"></div>
                       <div id="logo3"></div>
                   </label>

               <div className={"buttons"}>
                   <ul className="logo">

                       <li>
                           <Link to="/locaties" activeClassName="active-link">Locaties</Link>
                       </li>

                       <li>
                           <Link to="/profile" activeClassName="active-link">Mijn Account</Link>
                       </li>


                        {/*<li>*/}
                        {/*    <p>Upload <link to="/adminpage">hier</link>de (nieuwe) menukaart</p>*/}
                        {/*</li>*/}
                       {/*<li>*/}
                       {/*    <button type="button" onClick={() => history.push("/homePage")}>Log uit</button>*/}
                       {/*</li>*/}

                       {/*<li>*/}
                       {/*    <button type="button" onClick={() => history.push("/Login")}>Log in</button>*/}
                       {/*</li>*/}
                       <li>
                       <Link to="/login" activeClassName="active-link">Login</Link>
                       </li>

                       <li>
                           <Link to="/contact" activeClassName="active-link">Contact</Link>
                       </li>

                   </ul>
               </div>




           </footer>

    );
}

export default Footer;