import React from 'react';
import { connect } from 'react-redux';

import { deleteUserList, updateUserList } from '../../../actions';

class UserItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      newItemEdit: {
        name: '',
        description: '',
        cost: '',
        gameName: '',
        userId: null,
      }
    };
  }

  handleChange = e => {
    this.setState({
      newItemEdit: {
        ...this.state.newItemEdit,
        [e.target.name]: e.target.value
      }
    });
  };

  startEdit = () => {
    this.setState({
      isEditing: true,
    });
  };

  endEdit = () => {
    this.setState({
      isEditing: false,
    });
  };

  deleteList = (itemId) => {
    const userId = localStorage.getItem('userId');
    this.props.deleteUserList(userId, itemId)
  }

  updateList = e => {
    const newList = this.state.newItemEdit;
    const itemId = this.props.item.itemId;
    const userId = localStorage.getItem('userId');
    e.preventDefault();
    this.props.updateUserList(newList, userId, itemId)
    this.setState({
      newItemEdit: {
        name: '',
        description: '',
        cost: '',
        gameName: '',
        userId: null,
      }
    });
  }

  render() {
    if (this.state.isEditing === false) {
      return (
        <div className='item-card'>
          <div className='item-img'>
            <img src={this.props.item.img} alt={this.props.item.name} className='img' />
          </div>

          <div className='item-info'>
              <h3>ID#: {this.props.item.itemId} | {this.props.item.name}</h3>
              <p>{this.props.item.description}</p>
            <h5>${this.props.item.cost} | <span>{this.props.item.gameName}</span></h5>
          </div>

          <div className='item-actions'>
            <button onClick={this.startEdit}><i className="fas fa-edit"></i></button>
            <button onClick={this.deleteList}><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
      )
    } else {
      return (
        <div className='item-card'>
          <div className='item-img'>
            <img src={this.props.item.img} alt={this.props.item.name} className='img' />
          </div>

          <div className='item-info'>
            <form onSubmit={this.updateList}>
              <div className='info-row'>
                <input
                  name='userId'
                  type='text'
                  value={localStorage.getItem('userId')}
                  onChange={this.handleChange}
                  placeholder='User Id'
                  className='row-5'
                />

                <input
                  name='name'
                  type='text'
                  value={this.state.newItemEdit.name}
                  onChange={this.handleChange}
                  placeholder='Item Name'
                  className='row-5'
                />
              </div>

              <div className='info-row'>
                <input
                  name='description'
                  type='text'
                  value={this.state.newItemEdit.description}
                  onChange={this.handleChange}
                  placeholder='Item Description'
                  className='row-10'
                />
              </div>

              <div className='info-row'>
                <input
                  name='cost'
                  type='text'
                  value={this.state.newItemEdit.cost}
                  onChange={this.handleChange}
                  placeholder='Item Price'
                  className='row-5'
                />

                <input
                  name='gameName'
                  type='text'
                  value={this.state.newItemEdit.gameName}
                  onChange={this.handleChange}
                  placeholder='Game (i.e. Pokemon, Fortnight, etc...)'
                  className='row-5'
                />
              </div>

              <button>Submit!</button>
            </form>
          </div>

          <button onClick={this.endEdit}><i className="far fa-check-square"></i></button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isUpdatingUserItem: state.userReducer.isUpdatingUserItem,
    isDeletingUserItem: state.userReducer.isDeletingUserItem
  };
};

export default connect(mapStateToProps,
  { deleteUserList, updateUserList }
)(UserItemCard);
