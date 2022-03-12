import React, { Component } from 'react'
import './App.css';
import Footer from './Footer';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

class Home extends Component {
  render() {
    return (
        <div>
            <div id="carousel-example-1z" class="carousel slide carousel-fade home" data-ride="carousel">
                <Footer/>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <Slide1/>
                    </div>
                    <div class="carousel-item">
                        <Slide2/>
                    </div>
                    <div class="carousel-item">
                        <Slide3/>
                    </div>
                    <div class="carousel-item">
                        <Slide4/>
                    </div>
                </div>
          </div>
        </div>
    )
  }
}

export default Home