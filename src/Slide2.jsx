import React, { Component } from 'react'
import './App.css';

class Slide2 extends Component {
  render() {
    return (
      <div>
        <img width="1252px" class="d-block " src="img2.jpg"
          alt="Second slide" />
        <div class="work">
          <h1 class="titlee wow Animate flip">
            MY WORK
            <img src="https://img.icons8.com/plasticine/100/000000/work.png" />
          </h1>
          <div class=" row row-cols-1 row-cols-md-4">
            <div class="col mb-4">
              <div class="card">
                <div class="view overlay">
                  <img class="card-img-top" src="WhatsApp Image 2022-03-13 at 7.31.32 AM.jpeg"
                    alt="Card image cap" />
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="https://github.com/YasminHamed/Eatery-Cafe.git">Eatery cafe</a>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <div class="view overlay">
                  <img class="card-img-top" src="WhatsApp Image 2022-03-13 at 7.31.33 AM (2).jpeg"
                    alt="Card image cap" />
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="https://github.com/YasminHamed/Netflix.git">Netflix</a>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <div class="view overlay">
                  <img class="card-img-top" src="WhatsApp Image 2022-03-13 at 7.31.33 AM.jpeg"
                    alt="Card image cap" />
                  <a href="#!">
                    <div class="Facebook"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="#">Facebook</a>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <div class="view overlay">
                  <img class="card-img-top" src="WhatsApp Image 2022-03-13 at 7.31.33 AM (1).jpeg"
                    alt="Card image cap" />
                  <a href="#!">
                    <div class="Comments"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="https://github.com/YasminHamed/project.git">Comments</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slide2