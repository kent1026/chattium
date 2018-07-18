import React, { Component } from 'react';
import logo from '../icons/logo.svg';
import Welcome from './Welcome';
import MessageCardGroup from './MessageCardGroup';
import './App.css';

class App extends Component {
  state = {
    numUsers: 0,
  };
  render() {
    const { numUsers } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Welcome numUsers={numUsers} />
        <MessageCardGroup messages={[1, 2]} />
      </div>
    );
  }
}

export default App;
