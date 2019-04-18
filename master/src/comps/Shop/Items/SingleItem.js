import React from 'react';
import { connect } from 'react-redux';

import { getThisItem } from '../../../actions';


class SingleItem extends React.Component {

  componentDidMount() {
    const itemId = this.props.match.params.itemId;
    this.props.getThisItem(itemId);
  }

  render() {
    return (
      <div className='SingleItem'>
        <div className='img-wrap'>
          <img src={this.props.thisItem.img} alt={this.props.thisItem.name} className='img' />
        </div>

        <div className='info-wrap'>
          <h3>{this.props.thisItem.name}</h3>
          <p>{this.props.thisItem.description}</p>
          <h5>${this.props.thisItem.cost} | <span>{this.props.thisItem.gameName}</span></h5>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    thisItem: state.shopReducer.thisItem,
    isGettingThisItem: state.isGettingThisItem
  };
};

export default connect(mapStateToProps,
  { getThisItem }
)(SingleItem);
