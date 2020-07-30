/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React, { Component } from "react";
import './header.css'

export class Header extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand page-scroll" href="#">
              Connex
            </a>{" "}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
