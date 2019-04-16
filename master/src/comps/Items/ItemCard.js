import React from 'react';

class ItemCard extends React.Component {
  render() {
    return (
      <div>
        <h3>ID# {this.props.item.id} | {this.props.item.name}</h3>
        <p>Age: {this.props.item.age}</p>
        <p>Height: {this.props.item.height}</p>
      </div>
    )
  }
}

export default ItemCard;
