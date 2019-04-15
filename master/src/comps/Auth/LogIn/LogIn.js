import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
      .then(() => {
        this.props.history.push('/')
      })
  }

  handleLogin = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    return(
      <div className='auth-cont'>
        <div className='auth-box'>
          <h2>Please Log In</h2>
          <hr className='hr' />
          <form onSubmit={this.login}>
            <h3>Username</h3>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleLogin}
            />
            <h3>Password</h3>
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              onChange={this.handleLogin}
            />
            <br />
            <button>Log in!</button>
          </form>

          <p>Not a member? Register <a href='/signup'>here</a></p>
        </div>
      </div>
    )
  }
}

export default connect(null,
  { login }
)(Login);
