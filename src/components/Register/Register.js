import React, { Component } from 'react';
import logo from '../../assets/images/logo&name1.png';

import '../Login/Login.scss';

class Register extends Component {
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
            <p>Create an account {display}</p>
          </div>

          <div class="uname">
            <fieldset>
              <legend>First name</legend>
              <input type="text" name="fname" id="fname" />
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Last name</legend>
              <input type="text" name="lname" id="lname" />
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Username</legend>
              <input type="text" name="uname" id="uname" />
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Email</legend>
              <input type="text" name="email" id="email" />
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

export default Register;
