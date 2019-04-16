import React from 'react';
import PrivateRoute from '../Auth/PrivateRoute.js';

import UserItem from './Routes/UserItem.js';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>My Profile</h2>
        </div>

        <switch>
          <PrivateRoute path='profile/:id/myitems/' component={ UserItem } />
        </switch>
      </div>
    )
  }
}

export default Profile;
