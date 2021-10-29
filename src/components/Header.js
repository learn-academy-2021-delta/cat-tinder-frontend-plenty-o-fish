import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cute from '../assets/cute.jpeg'

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/">
          <img src={cute} alt="logo for fish Tinder" className="fish-logo"/>
        </NavLink>
        <div className="nav-links">
          <ul>
            <NavLink to="/fishindex">Meet the fish</NavLink>
          </ul>
          <ul>
            <NavLink to="/fishnew">Add a fish</NavLink>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header