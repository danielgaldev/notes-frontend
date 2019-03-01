import React, { Component } from 'react';

class Message extends Component {

  render() {
    return (
      <div className="ui compact segment centered" style={{ margin: "1em auto" }}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Message;
