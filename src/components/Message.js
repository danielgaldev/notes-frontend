import React, { Component } from 'react';

class Message extends Component {

  render() {
    return(
      <div className="ui segment">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Message;
