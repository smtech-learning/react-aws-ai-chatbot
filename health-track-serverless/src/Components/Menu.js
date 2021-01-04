import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "../Styles/Custom.css";
import { browserHistory as history } from "history";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  callLogout1(e) {
    e.preventDefault();
    this.props.history.push("/home/addProducts");
  }

  render() {
    return (
      <span className='App-header'>
        <span id='span-menu-item2'>
          <NavLink to='/home/addProducts' activeStyle={{ color: "white" }}>
            Add Products
          </NavLink>
        </span>

        <span id='span-menu-item2'>
          <NavLink to='/home/searchProducts' activeStyle={{ color: "white" }}>
            Search Products
          </NavLink>
        </span>

        <span id='span-menu-item4'>
          <NavLink to='/' activeStyle={{ color: "white" }}>
            Logout
          </NavLink>
        </span>
      </span>
    );
  }
}
