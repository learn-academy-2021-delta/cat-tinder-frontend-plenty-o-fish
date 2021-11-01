import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { Card, CardTitle, Col } from 'reactstrap'

class FishIndex extends Component {
  render() {
    return (
      <>
        <h3>Meet our Fantastic Fish Friends</h3>
        {this.props.fish && this.props.fish.map(fish => {
          return (
            <p key={fish.id}>
              <NavLink to={`/fishshow/${fish.id}`}>
                {fish.name}
              </NavLink>
            </p>
          )
        })}
      </>
    )
  }
}
export default FishIndex