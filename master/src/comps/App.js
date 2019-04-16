import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute.js';

import '../design/css/index.css';
import NavBar from './NavBar/NavBar.js';
import Home from './Home/Home.js';
import LogIn from './Auth/LogIn/LogIn.js';
import SignUp from './Auth/SignUp/SignUp.js';
import Profile from './User/Profile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <switch>
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ LogIn } />
          <Route path='/signup' component={ SignUp } />
          <PrivateRoute path='/myprofile/:id' component={ Profile } />
        </switch>
      </div>
    );
  }
}

export default App;
