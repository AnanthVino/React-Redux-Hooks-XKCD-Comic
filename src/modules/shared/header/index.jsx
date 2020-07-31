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
            <h3 className="navbar-brand">
              CONNEX
            </h3>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
