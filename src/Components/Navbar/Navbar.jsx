import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="header" >
          <h4>This Is Beta Version</h4>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/makanan">Makanan</Link>
            </li>
            <li>
              <Link to="/minuman">Minuman</Link>
            </li>
            <li>
              <Link to="/kontak">Kontak</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
