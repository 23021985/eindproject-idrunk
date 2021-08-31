import React, {useContext} from "react";
import Hamburger from "../hamburger-drop-down/Hamburger";
import "./Header.css"
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function Header(){
    const history = useHistory();
    const { user, logout } = useContext(AuthContext);
    // console.log(user);

    return(
      <header>
          <div className={"logo"}>

                  <h1>IDRUNK</h1>
          </div>
          {/*<div>*/}
          {/*    {!user ? (*/}
          {/*        <>*/}
          {/*            <button type="button" onClick={() => history.push("/Login")}>*/}
          {/*                Log in*/}
          {/*            </button>*/}
          {/*            <button type="button" onClick={() => history.push("/Subscribe")}>*/}
          {/*                Registreren*/}
          {/*            </button>*/}
          {/*        </>*/}
          {/*    ) : (*/}
          {/*        <button type="button" onClick={logout}>*/}
          {/*            Loguit*/}
          {/*        </button>*/}
          {/*    )}*/}
          {/*</div>*/}
<ul className="buttonBox">
          <li>
              <button type="button" id="leButton" onClick={logout}>Log uit</button>
          </li>

          <li>
              <button type="button" id="leButton" onClick={() => history.push("/Login")}>Log in</button>
          </li>
</ul>


          <Hamburger/>
      </header>
    );
}

export default Header;