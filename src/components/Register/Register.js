import React, { Component } from 'react';
import logo from '../../assets/images/logo&name1.png';
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
    return (
      <div class="container">
        <div>
          <div class="Logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div class="users-pro">
          <div class="title">
            <p>Create an account </p>
          </div>

          <div class="uname">
            <fieldset>
              <legend>First name</legend>
              <input
                type="text"
                name="firstname"
                id="fname"
                onChange={this.handleChange}
                value={user.firstname}
              />
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Last name</legend>
              <input
                type="text"
                name="lastname"
                id="lname"
                value={user.lastname}
                onChange={this.handleChange}
              />
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Username</legend>
              <input
                type="text"
                name="username"
                id="uname"
                value={user.username}
                onChange={this.handleChange}
              />
            </fieldset>
          </div>
          <div class="uname">
            <fieldset>
              <legend>Email</legend>
              <input
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={this.handleChange}
              />
            </fieldset>
          </div>
          <div class="pword">
            <fieldset>
              <legend>Password</legend>
              <input
                type="password"
                name="password"
                id="pword"
                value={user.password}
                onChange={this.handleChange}
              />
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
