import React from "react";
import {NavLink, Link} from "react-router-dom";
import {connect} from 'react-redux';
import logo from '../../logo.svg';

export const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">Welcome to React</h1>
  </header>

);

const mapDispatchToProps = (dispatch) => ({
  //startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
