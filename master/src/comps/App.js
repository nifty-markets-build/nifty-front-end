import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute.js';

import '../design/css/index.css';
import NavBar from './NavBar/NavBar.js';
import Home from './Home/Home.js';
import LogIn from './Auth/LogIn/LogIn.js';
import SignUp from './Auth/SignUp/SignUp.js';
import Profile from './User/Profile.js';

class App extends Component {
  render() {
    const id = () => {
      return(
        localStorage.getItem('userId')
      );

    }

    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ LogIn } />
          <Route path='/signup' component={ SignUp } />
          <Route exact path={`/profile/${id}`} component={ Profile } />
        </Switch>
      </div>
    );
  }
}

export default App;
