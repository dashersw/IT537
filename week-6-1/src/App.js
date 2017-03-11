import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var name = 'IT537';

class University extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {this.props.name}</h2>
        </div>
        <p className="App-intro" style={{ backgroundColor: this.props.color }}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    var universities = [{ name: 'Sabanci', color: '#ddf' }, { name: 'Bilkent', color: '#fdd' }, { name: 'Koc', color: '#dfd' }];

    var universityViewArray = universities.
      filter(u => u.name.length > 3).
      map(u => <University name={u.name} color={u.color} />);

    return <div>
      {universityViewArray}
    </div>
  }
}

export default App;
