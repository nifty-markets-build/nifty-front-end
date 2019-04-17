import React from 'react';
import { Link } from 'react-router-dom';

import NiftyMarket from '../../ast/Logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isUserOpen: false,
      menuItems: [
        {
          id: 1,
          text: 'Home',
          link: '/',
        },
        {
          id: 2,
          text: 'My Profile',
          link: '/profile/:id',
        },
        {
          id: 3,
          text: 'My Items',
          link: '/Items/:id',
        },
      ],
      userItems: [
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
    this.toggleUser = this.toggleUser.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  } /*Function enables and disables dropdown on click*/

  toggleUser() {
    this.setState(prevState => ({
      isUserOpen: !prevState.isUserOpen
    }));
  } /*Function enables and disables dropdown on click*/

  render() {
    const {isMenuOpen, menuItems} = this.state
    const {isUserOpen, userItems} = this.state
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
        {isUserOpen && <div id='item-drop' className='user-items'>
          {userItems.map((item) => (
            <Link to={item.link} key={ item.id } className='user-link'>{ item.text }</Link>
          ))}
        </div>}

        {isUserOpen
          ? <i onClick={ this.toggleUser } className="fas fa-minus-square" />
          : <i onClick={ this.toggleUser } className="far fa-user"></i>
        }
        </div>
      </div>
    );
  }
};

export default NavBar;
