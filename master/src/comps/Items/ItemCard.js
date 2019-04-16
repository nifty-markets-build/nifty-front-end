import React from 'react';

class ItemCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.item.img} alt=''/>
        </div>

        <div>
          <h3>{this.props.item.name}</h3>
          <p>{this.props.item.description}</p>
          <h4>${this.props.item.price} | {this.props.item.user}</h4>
        </div>


      </div>
    )
  }
}

export default ItemCard;
