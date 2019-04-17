import React from 'react';

class ItemCard extends React.Component {
  render() {
    return (
      <div className='ItemCard'>
        <div>
          <img src={this.props.item.img} alt={this.props.item.name} className='img' />
        </div>

        <div className='info'>
          <h3>{this.props.item.name}</h3>
          <p>{this.props.item.description}</p>
          <h5>${this.props.item.cost} | <span>{this.props.item.gameName}</span></h5>
        </div>


      </div>
    )
  }
}

export default ItemCard;
