import React from 'react';
import { connect } from 'react-redux';

import { getItems } from '../../actions';

import Logo from '../../ast/NiftyMarkets.png';
import ItemCard from '../Items/ItemCard';


class Home extends React.Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div className='home'>
        <header>
          <img src={ Logo } className='logo' alt='Nifty Markets logo' />

          <div className='actions'>

          </div>
        </header>

        <body>
          {this.props.items.map(item => {
            return <ItemCard key={item.name} item={item} />;
          })}
        </body>
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
)(Home);
