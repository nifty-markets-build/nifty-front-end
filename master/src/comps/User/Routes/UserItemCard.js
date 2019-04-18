import React from 'react';
import { connect } from 'react-redux';

import { deleteUserList, updateUserList } from '../../../actions';

class UserItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemUpdates: {
        name: '',
        description: '',
        cost: '',
        gameName: '',
      }
    };
  }

  deleteList = itemId => {
    const userId = this.props.match.params.userId;
    this.props.deleteUserList(userId, itemId)
  }

  render() {
    return (
      <div className='item-card'>
        <div className='item-img'>
          <img src={this.props.item.img} alt={this.props.item.name} className='img' />
        </div>

        <div className='item-info'>
            <h3>ID#: {this.props.item.itemId} | {this.props.item.name}</h3>
            <hr />
            <p>{this.props.item.description}</p>
          <h5>${this.props.item.cost} | <span>{this.props.item.gameName}</span></h5>
        </div>

        <div className='item-actions'>
          <div>
            <i class="fas fa-edit"></i>
          </div>

          <div>
            <i onClick={this.deleteList(this.props.item.itemId)} class="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isUpdatingUserItem: state.isUpdatingUserItem,
    isDeletingUserItem: state.isDeletingUserItem
  };
};

export default connect(mapStateToProps,
  { deleteUserList, updateUserList }
)(UserItemCard);
