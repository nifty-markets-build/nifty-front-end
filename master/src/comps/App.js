import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute.js";

import "../design/css/index.css";
import NavBar from "./NavBar/NavBar.js";
import Home from "./Home/Home.js";
import LogIn from "./Auth/LogIn/LogIn.js";
import SignUp from "./Auth/SignUp/SignUp.js";
import Shop from "./Shop/Shop.js";
import SingleItem from "./Shop/Items/SingleItem.js";
import Profile from "./User/Profile.js";
import FAQ from "./FAQ/FAQ.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:itemId" component={SingleItem} />
          <Route path="/faq" component={FAQ} />
          <PrivateRoute exact path="/profile/:userId" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
