import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../ast/NiftyMarkets.png';


class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <header>
          <img src={ Logo } className='logo' alt='Nifty Markets logo' />

          <div className='actions'>
            <Link to='/shop'>Shop Now!</Link>
          </div>
        </header>
      </div>
    )
  }
}

export default Home;
