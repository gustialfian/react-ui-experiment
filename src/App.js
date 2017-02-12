import React, { Component } from 'react';

import Home from './components/Home'
import NavLink from './components/NavLink'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>My UI Experiment</h1>
        <div className="ui menu">
          <NavLink className="item" to="/" onlyActiveOnIndex={true} >Home</NavLink>
          <NavLink className="item" to="/coment-box">coment-box</NavLink>
          <NavLink className="item" to="/form-validation">form-validation</NavLink>
        </div>

        {this.props.children || <Home />}
      </div>
    );
  }
}

export default App;
