import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getItems } from '../../actions';

import Logo from '../../ast/NiftyMarkets.png';
import ItemCard from '../Items/ItemCard';
import SingleItem from '../Items/SingleItem';

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

        <div>
          {this.props.items.map(item => {
            return <ItemCard item={item} key={item.id} />;
          })}
        </div>

        <Switch>
        //  <Route path='/:itemId' component={SingleItem}/>
        </Switch>
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
