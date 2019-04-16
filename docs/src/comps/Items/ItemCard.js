import React from 'react';

class ItemCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.item.img}
        </div>

        <div>
          <h3>ID# {this.props.item.price} | {this.props.item.name}</h3>
          <p>Age: {this.props.item.description}</p>
        </div>
      </div>
    )
  }
}

export default ItemCard;
