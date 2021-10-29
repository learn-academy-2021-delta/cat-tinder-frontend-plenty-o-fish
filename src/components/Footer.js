import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
        <ul>
          <NavLink to="/">&copy; 2021 Brandon $ Rob</NavLink>
        </ul>
        <ul>
          <NavLink to="/fishindex">Meet The Fish</NavLink>
        </ul>
        <ul>
          <NavLink to="/fishnew">Add a Fish</NavLink>
        </ul>
      </footer>
    )
  }
}
export default Footer
