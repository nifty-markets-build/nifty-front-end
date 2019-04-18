import React from 'react';

import UserNavBar from './UserNavBar.js';
import GuestNavBar from './GuestNavBar.js';

class NavBar extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }
  
  render() {
    if (localStorage.token) {
      return (
        <div>
          <UserNavBar />
        </div>
      )
    } else {
      return (
        <div>
          <GuestNavBar />
        </div>
      )
    }
  }
}

export default NavBar;
