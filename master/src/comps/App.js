import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../design/css/index.css';
import NavBar from './NavBar/NavBar.js';
import Home from './Home/Home.js';
import LogIn from './Auth/LogIn/LogIn.js';
import SignUp from './Auth/SignUp/SignUp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <switch>
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ LogIn } />
          <Route path='/signup' component={ SignUp } />
        </switch>
      </div>
    );
  }
}

export default App;
