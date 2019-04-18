import React from 'react';

import GuestHome from './GuestHome';
import UserHome from './UserHome';


class Home extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }
  
  render() {
    if (localStorage.token) {
      return (
        <div>
          <UserHome />
        </div>
      )
    } else {
      return (
        <div>
          <GuestHome />
        </div>
      )
    }
  }
}

export default Home;
