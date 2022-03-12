import React, { Component } from 'react';
import './App.css';

class Slide1 extends Component {
  render() {
    return (
      <div>
        <img class="d-block w-100" src="6676550.jpg"
          alt="First slide" />
        <div>
          <h1 class="title wow Animate flip">
            <span>
              HELLO! <img width="10%" src="https://img.icons8.com/cute-clipart/64/000000/happy.png" />
            </span>
            <br />
            <span class="Row MY">MY NAME IS</span>
            <span class="myname">YASMIN</span>
          </h1>
        </div>
      </div>
    )
  }
}

export default Slide1