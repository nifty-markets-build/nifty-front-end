import React, { Component } from 'react';

import '../design/css/index.css';
import NavBar from './NavBar/NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h2>App</h2>
      </div>
    );
  }
}

export default App;
