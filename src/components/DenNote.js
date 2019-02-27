import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class DenNote extends Component {
  render() {
    return (
      <div>
        <h2 className="ui header">Welcome to PonyNote!</h2>
        <p>
        <Link to="/contact">Click Here</Link> to contact us!
        </p>
      </div>
    )
  }
}

export default DenNote
