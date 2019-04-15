import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signup } from '../../../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  }

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.credentials)
      .then(() => {
        this.props.history.push("/login")
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
      <div className='cont'>
        <div className='box'>
          <h2>Register Now!</h2>
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
            <button>Register!</button>
            </form>

            <p>Already a member? Sign in <a href='/login'>here</a></p>
          </div>
      </div>
    )
  }
}

export default connect(null,
  { signup }
)(SignUp);
