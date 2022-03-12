import React, { Component } from 'react'
import './App.css';
import Home from './Home';
import Navbar  from './Navbar';


class App extends Component {
  render() {
    return (
      <div>
          <Home/>
          <Navbar/>
      </div>
    )
  }
}

export default App