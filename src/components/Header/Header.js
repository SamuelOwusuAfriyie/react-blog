import React from "react";

import {Adinkra} from "react-adinkra";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-background"></div>
        <div className="header">
          <h1>Samuel O. Afriyie</h1>
          <div className="sub-sep">
            <p>Web Developer
              <Adinkra className="logo" name={'nea-onnim-no-sua-a-oh'}/>
              Cinematography</p>
            <h3>When you are happy you can't stop the joy</h3>
          </div>
        </div>
      </div>

    )
  }
}
export default Header;
