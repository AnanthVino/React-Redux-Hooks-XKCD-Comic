/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React, { Component } from 'react'
import Header from './modules/shared/header';
import Home from './modules/components/home';

export class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

export default App;
