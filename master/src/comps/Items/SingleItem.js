import React from 'react';

class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    let myId;
    if (this.props.itemId) {
      myId = this.props.itemId;
    } else {
      myId = this.props.match.params.itemId;
    }
    const foundItem = this.props.items.find(item => item.id === Number(myId));
    if (!foundItem) return;
    this.setState({ item: foundItem })
  }

  render() {
    const { name, gameName, description, cost, userId } =
  }
}
