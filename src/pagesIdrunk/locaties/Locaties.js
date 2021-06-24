import {Link} from "react-router-dom";
import "./Locaties.css"

function Locaties(){
    
    return(
        <main>
            <div>
            <form className="locatieContainer">
                <label htmlFor="kies locatie" className="locatieLabel">
                    {/*<select name="locatie" id="locatie">*/}
                    {/*    <option value="Select">Select</option>*/}
                    {/*    <option value="Bar Stork" to="">Bar Stork</option>*/}
                    {/*    <option value="soon">Soon..</option>*/}
                    {/*    <option value="binnenkort">Binnenkort</option>*/}
                    {/*    <option value="bijna open">Bijna open</option>*/}
                    {/*</select>*/}
                    <ul className="linksToBars">

                        <li>
                            <Link to="/storkhomepage" activeClassName="active-link"> Bar Stork</Link>
                        </li>

                        <li>
                            <Link to="/soon" activeClassName="active-link">Soon..</Link>
                        </li>

                        <li>
                            <Link to="/soon" activeClassName="active-link">Soon..</Link>
                        </li>

                        <li>
                            <Link to="/soon" activeClassName="active-link">Soon..</Link>
                        </li>

                    </ul>

                </label>

            </form>
            </div>
        </main>
        
    )
}

export default Locaties;