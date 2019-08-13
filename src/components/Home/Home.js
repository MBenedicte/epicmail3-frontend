import React, { Component } from 'react';
import './Home.scss';
import Logo from '../../assets/images/logo&name1.png';
import Communication from '../../assets/images/Communication.jpg';

class Home extends Component {
  state = { display: '' };

  render() {
    const { display } = this.state;
    return (
      <div class="container">
        <div class="header-container">
          <div class="menu">
            <div class="navbar">
              <li>
                <img src={Logo} alt="" />
              </li>
              <ul>
                <li>
                  <a href="/login" class="signin">
                    SIGN IN {display}
                  </a>
                </li>
                <li>
                  <a href="/register">SIGN UP</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="body-box">
            <img src={Communication} alt="" />
          </div>
          <div class="body-box">
            <div class="text-1">Get in touch with your people</div>
            <div class="text-2">We want to be your perfect path</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
