import React, { Component } from 'react';
import './App.css';

class Slide3 extends Component {
  render() {
    return (
      <div>
        <img width="1252px" class="d-block" src="img2.jpg"
          alt="Third slide" />
        <div class="work">
          <h1 class="wow Animate flip skills">
            MY SKILLS
            <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-skills-business-and-management-kiranshastry-lineal-color-kiranshastry-3.png" />
          </h1>
          <ul class="list">
            <li>HTML</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Reactjs</li>
          </ul>
          <img class="imgg" width="150%" src="OIP (1).jpg" alt="" />
        </div>
      </div>
    )
  }
}

export default Slide3