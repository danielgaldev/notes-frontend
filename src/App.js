import React, { Component } from 'react';

import Message from './components/Message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:8000/notes/messages/')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        messages: data
      });
    })
  }

  render() {
    let content = this.state.messages.map(msg => {
      return <Message key={msg.id} text={msg.text} />
    })
    if (this.state.messages.length === 0) {
      content = <div className="ui active text loader">Loading</div>;
    }
    return (
      <div style={{padding: "1em"}}>
        <h1 className="ui centered header">Messages</h1>
        {content}
      </div>
    );
  }
}

export default App;
