import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../ast/NiftyMarkets.png';


class GuestHome extends React.Component {
  render() {
    return (
      <div className='home'>
        <header>
          <img src={ Logo } className='logo' alt='Nifty Markets logo' />

          <div className='actions'>
          <Link to='/signup' className='home-btn'>Sign Up</Link>
          <Link to='/shop' className='home-btn'>Shop Now!</Link>
          <Link to='/login' className='home-btn'>Log In</Link>
          </div>
        </header>
      </div>
    )
  }
}

export default GuestHome;
