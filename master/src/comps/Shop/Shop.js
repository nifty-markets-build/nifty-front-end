import React from 'react';
import { connect } from 'react-redux';

import { getItems } from '../../actions';

import Logo from '../../ast/NiftyMarkets.png';
import ItemCard from './Items/ItemCard.js';


class Shop extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div className='shop'>
        <header>
          <img src={ Logo } className='logo' alt='Nifty Markets logo' />
        </header>

        <h2 className='page-title'>Shop</h2>

        <div className='shop-items'>
          {this.props.items.map(item => {
            return <ItemCard item={item} key={item.itemId} />;
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.shopReducer.items,
    isGettingItems: state.isGettingItems
  };
};

export default connect(mapStateToProps,
  { getItems }
)(Shop);
