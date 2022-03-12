import React, { Component } from 'react'
import './App.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                          <div>
            <div class="Row">
              <img class="logo" width="5%" height="5%" src="https://img.icons8.com/fluency/48/000000/laptop.png" />
              <div class="name">
                <h2 class="yasmin" >Yasmin</h2>
                <p>creative template</p>
              </div>
            </div>
            <div class="logos Row">
              <img class="icons" width="25px" src="https://img.icons8.com/ios/50/000000/twitter--v1.png" />
              <img class="icons" width="25px" src="https://img.icons8.com/fluency-systems-regular/48/000000/facebook-f.png" />
              <img class="icons" width="25px" src="https://img.icons8.com/ios/50/000000/google-logo--v1.png" />
              <img class="icons" width="25px" src="https://img.icons8.com/ios/50/000000/linkedin.png" />
            </div>
          </div>
            </div>
        )
    }
}

export default Navbar