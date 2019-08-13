import React, { Component } from 'react';
import logo from '../../assets/images/logo&name1.png';
<<<<<<< HEAD

import '../Login/Login.scss';

class Register extends Component {
  state = { display: '' };

  render() {
    const { display } = this.state;
=======
import '../Login/Login.scss';

class Register extends Component {
  state = {
    user: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: ''
    }
  };

  handleChange = (e) => {
    const { user } = this.state;
    this.setState({ user: { ...user, [e.target.name]: e.target.value } });
  };

  render() {
    const { user } = this.state;
>>>>>>> Add login and sign up features
    return (
      <div class="container">
        <div>
          <div class="Logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div class="users-pro">
          <div class="title">
<<<<<<< HEAD
            <p>Create an account {display}</p>
=======
            <p>Create an account </p>
>>>>>>> Add login and sign up features
          </div>

          <div class="uname">
            <fieldset>
              <legend>First name</legend>
<<<<<<< HEAD
              <input type="text" name="fname" id="fname" />
=======
              <input
                type="text"
                name="firstname"
                id="fname"
                onChange={this.handleChange}
                value={user.firstname}
              />
>>>>>>> Add login and sign up features
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Last name</legend>
<<<<<<< HEAD
              <input type="text" name="lname" id="lname" />
=======
              <input
                type="text"
                name="lastname"
                id="lname"
                value={user.lastname}
                onChange={this.handleChange}
              />
>>>>>>> Add login and sign up features
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Username</legend>
<<<<<<< HEAD
              <input type="text" name="uname" id="uname" />
=======
              <input
                type="text"
                name="username"
                id="uname"
                value={user.username}
                onChange={this.handleChange}
              />
>>>>>>> Add login and sign up features
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Email</legend>
<<<<<<< HEAD
              <input type="text" name="email" id="email" />
=======
              <input
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={this.handleChange}
              />
>>>>>>> Add login and sign up features
            </fieldset>
          </div>
          <div class="pword">
            <fieldset>
              <legend>Password</legend>
<<<<<<< HEAD
              <input type="password" name="pword" id="pword" />
=======
              <input
                type="password"
                name="password"
                id="pword"
                value={user.password}
                onChange={this.handleChange}
              />
>>>>>>> Add login and sign up features
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
