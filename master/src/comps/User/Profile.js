import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import { getUser, getUserItems, addItem } from '../../actions';

import UserItemCard from './Routes/UserItemCard.js';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {
        name: '',
        description: '',
        cost: '',
        gameName: '',
        userId: null,
      }
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getUser(userId);
    this.props.getUserItems(userId)
  };

  handleChange = e => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        [e.target.name]: e.target.value
      }
    });
  };

  addItem = e => {
    const userId = this.props.match.params.userId;
    const newItem = this.state.newItem;
    e.preventDefault();
    this.props.addItem(newItem, userId)
    this.setState({
      newItem: {
        name: '',
        description: '',
        cost: '',
        gameName: '',
        userId: null,
      }
    });
  };

  render() {
    return (
      <div className='profile'>
        <div className='head'>
          <h2>ID# {this.props.user.userId} | {this.props.user.firstName}'s Profile</h2>
        </div>

        <div className='user-info'>
          <div className='img'>
            <img src={this.props.user.img} alt={this.props.user.firstName} />
          </div>

          <div className='info'>
          <h3> My Info </h3>
          <p><span>First Name: </span>{this.props.user.firstName}</p>
          <p><span>Last Name: </span>{this.props.user.lastName}</p>
          <p><span>Username: </span>{this.props.user.username}</p>
          <p><span>E-Mail: </span>{this.props.user.email}</p>
          </div>
        </div>

        <div className='user-tabs'>
          <Tabs>
            <TabList>
              <Tab><span className='span'>My Items</span></Tab>
              <Tab><span className='span'>New Item</span></Tab>
              <Tab><span className='span'>My Transactions</span></Tab>
            </TabList>

            <TabPanel>
              <h4>{this.props.user.firstName}'s Items</h4>
              <hr />
              <div>
                {this.props.userItems.map(item => {
                  return <UserItemCard item={item} key={item.itemId} />;
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <h4>Sell something...</h4>
              <hr />
              <div>
                <form onSubmit={this.addItem}>
                  <h5>Item Name:</h5>
                  <input
                    name='name'
                    type='text'
                    value={this.state.newItem.name}
                    onChange={this.handleChange}
                    placeholder='Item Name'
                  />

                  <h5>Item Description:</h5>
                  <input
                    name='description'
                    type='text'
                    value={this.state.newItem.description}
                    onChange={this.handleChange}
                    placeholder='Item Description'
                  />

                  <h5>Selling Price:</h5>
                  <input
                    name='cost'
                    type='text'
                    value={this.state.newItem.cost}
                    onChange={this.handleChange}
                    placeholder='Item Price'
                  />

                  <h5>Game:</h5>
                  <input
                    name='gameName'
                    type='text'
                    value={this.state.newItem.gameName}
                    onChange={this.handleChange}
                    placeholder='Game (i.e. Pokemon, Fortnight, etc...)'
                  />

                  <h5>User ID:</h5>
                  <input
                    name='userId'
                    type='text'
                    value={localStorage.getItem('userId')}
                    onChange={this.handleChange}
                    placeholder='User Id'
                  />

                  <button>Submit</button>
                </form>
              </div>
            </TabPanel>

            <TabPanel>
              <h4>{this.props.user.firstName}'s Transactions</h4>
              <hr />
              <div>
                <h2>Coming Soon!</h2>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    userItems: state.userReducer.userItems,
    isGettingUser: state.userReducer.isGettingUser,
    isGettingUserItems: state.userReducer.isGettingUserItems,
    isAddingItem: state.userReducer.isAddingItem
  };
};

export default connect(mapStateToProps,
  { getUser, getUserItems, addItem }
)(Profile);
