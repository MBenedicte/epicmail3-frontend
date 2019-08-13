import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';

const Routes = ({ isAuth }) => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} isAuth={isAuth} />} />
    <Route exact path="/register" render={props => <Register {...props} isAuth={isAuth} />} />
    <Route exact path="/login" render={props => <Login {...props} isAuth={isAuth} />} />
  </Switch>
);

Routes.propTypes = { isAuth: PropTypes.bool, match: PropTypes.object };
Routes.defaultProps = { match: { params: {} }, isAuth: false };

export const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });
export default connect(mapStateToProps)(Routes);
