import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

function Menu() {
  return (
      <div>
          <NavLink to='/about'  activeClassName="activeStyleChange"> About |</NavLink>
          <NavLink  to='/inventory'  activeClassName="activeStyleChange"> Inventory |</NavLink>
          <NavLink  to='/sale'  activeClassName="activeStyleChange"> Sale |</NavLink>
          <NavLink to='/help'  activeClassName="activeStyleChange"> Help </NavLink>
    </div>
  )
}

export default Menu;
