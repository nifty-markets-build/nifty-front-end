import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../actions';
import PrivateRoute from '../Auth/PrivateRoute.js';

import UserItem from './Routes/UserItem.js';

class Profile extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getUser(userId);
  }

  render() {
    return (
      <div className='profile'>
        <div className='head'>
          <h2>{this.props.user.firstName}'s Profile</h2>
        </div>

        <switch>
          <PrivateRoute path={`${this.props.match.path}/items`} component={ UserItem } />
        </switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    isGettingUser: state.isGettingUser
  };
};

export default connect(mapStateToProps,
  { getUser }
)(Profile);
