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
  constructor() {
    super();
    this.state = { selection: '' };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ selection: e.target.value });
  }

  render() {
    var universities = [{ name: 'Sabanci', color: '#ddf' }, { name: 'Bilkent', color: '#fdd' }, { name: 'Koc', color: '#dfd' }];

    var universityViewArray = universities.
      filter(u => u.name.toLowerCase().startsWith(this.state.selection.toLowerCase())).
      map(u => <University name={u.name} color={u.color} />);

    var additionalInfo = universityViewArray.length == 0 ? 'No matches' : universityViewArray.length + ' matches';
    return <div>
      <input onChange={this.onChange} value={this.state.selection} />
      <span>{this.state.selection}</span>
      {universityViewArray}
      <div>
        {additionalInfo}
      </div>
    </div>
  }
}

export default App;
