import {Link} from "react-router-dom";
import "./Hamburger-drop-down.css"


function Hamburger(){

    return(
         <section className="p-menu1">
        <nav id="navbar" className="navigation" role="navigation">
            <input id="toggle1" type="checkbox"/>
            <label className="hamburger1" htmlFor="toggle1">
                <div className="top"></div>
                <div className="meat"></div>
                <div className="bottom"></div>
            </label>

            <nav className="menu1">
                <Link className="link1" to="/login">Inloggen</Link>
                <Link className="link1" to="/locaties">Locaties</Link>
                <Link className="link1" to="/socials">Socials</Link>
                <Link className="link1" to="/blog">Blog</Link>
                <Link className="link1 button-nav" to="/contact">Contact</Link>
            </nav>
        </nav>
 </section>
    )
}
//U can find the CSS in Header.css
export default Hamburger;