import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';


class DenNote extends Component {
  render() {
    return (
      <div>
        <h2 className="ui header">Welcome to PonyNote!</h2>
        <hr />

        <table className="ui collapsing celled table">
            <tbody>
                {this.props.notes.map(note => (
                    <tr>
                        <td>{note.text}</td>
                        <td><button className="ui button">Edit</button></td>
                        <td><button className="ui button">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      notes: state.notes,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DenNote);