import React, { Component } from 'react';
import './Login.scss';
import logo from '../../assets/images/logo&name1.png';

class Login extends Component {
  state = { display: '' };

  render() {
    const { display } = this.state;
    return (
      <div class="container">
        <div>
          <div class="Logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div class="users-pro">
          <div class="title">
            <p>Sign in with your EPIC Mail account {display}</p>
          </div>

          <div class="uname">
            <fieldset>
              <legend>Username</legend>
              <input type="text" name="uname" id="uname" />
            </fieldset>
          </div>
          <div class="pword">
            <fieldset>
              <legend>Password</legend>
              <input type="password" name="pword" id="pword" />
            </fieldset>
          </div>
          <div class="next">
            <button type="submit" name="submit" id="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
