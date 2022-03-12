import React, { Component } from 'react'
import './App.css';

class Li extends Component {
  render() {
    return (
      <div>
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
          <li data-target="#carousel-example-1z" data-slide-to="3"></li>
        </ol>
      </div>
    )
  }
}

export default Li