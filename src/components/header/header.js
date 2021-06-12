import React from "react";
import Hamburger from "../hamburger-drop-down/Hamburger";
import "./Header.css"

function Header(){


    return(
      <header>
          <div className={"logo"}>

                  <h1>IDRUNK</h1>

          </div>

          <Hamburger/>
      </header>
    );
}

export default Header;