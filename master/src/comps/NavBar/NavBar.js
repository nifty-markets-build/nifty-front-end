import React from 'react';
import { Link } from 'react-router-dom';

import NiftyMarket from '../../ast/Logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      menuItems: [
        {
          id: 1,
          text: 'Home',
          link: '/',
        },
        {
          id: 2,
          text: 'Sign Up',
          link: '/signup',
        },
        {
          id: 3,
          text: 'Log In',
          link: '/login',
        },
      ]
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  } /*Function enables and disables dropdown on click*/

  render() {
    const {isMenuOpen, menuItems} = this.state
    return (
      <div className='navbar'>
        <div className='menu'>
          {isMenuOpen && <div id='item-drop' className='menu-items'>
            {menuItems.map((item) => (
              <Link to={item.link} key={ item.id } className='menu-link'>{ item.text }</Link>
            ))}
          </div>}

          {isMenuOpen
            ? <i onClick={ this.toggleMenu } className="fas fa-minus-square" />
            : <i onClick={ this.toggleMenu } className="fas fa-bars" />
          }
        </div>

        <div className='logo'>

          <img src={ NiftyMarket } alt='Nifty Market logo'/>
        </div>

        <div className="user">
          <i class="far fa-user"></i>
        </div>
      </div>
    );
  }
};

export default NavBar;
