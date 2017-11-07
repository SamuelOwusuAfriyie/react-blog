import React from "react";
import "./Navbar.css";
import FontAwesome from "react-fontawesome";
import {Adinkra} from "react-adinkra";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
        <a className="navbar-brand" href="#">
          <Adinkra className="logo" name={'ananse-ntontan'}/>
          Bliza Samuel</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <FontAwesome name="home"/>
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesome name="book"/>
                Biography</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesome name="plug"/>
                Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;
