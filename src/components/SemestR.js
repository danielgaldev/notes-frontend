import React, { Component } from 'react';
import { connect } from 'react-redux';
import { semesters } from '../actions';

class SemestR extends Component {
  state = {
    text: "",
    updateNoteId: null
  }

  componentDidMount() {
    this.props.fetchSemesters();
  }

  render() {
    console.log(this.props.semesters)
    return (
      <div>
        <div className="ui top borderless fixed menu">
          <h3 className="header item">
            <i className="sticky note icon normal"></i>
            SemestR
          </h3>
        </div>
        <div
          className="ui container segment"
          style={{ marginTop: "5em" }}>
          <h3 className="ui header">Semesters</h3>
          <table className="ui very basic table unstackable">
            <tbody>
              {this.props.semesters.map((semester, index) => (
                <tr key={`semester_${index}`}>
                  <td>{semester.number.toString().concat('. semester')}</td>
                  <td className="collapsing"><button
                    className="ui icon button"
                    onClick={() => this.props.deleteSemester(index)}>
                    <i className="trash alternate icon"></i>
                  </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    semesters: state.semesters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSemesters: () => {
      return dispatch(semesters.fetchSemesters());
    },
    deleteSemester: (index) => {
      return dispatch(semesters.deleteSemester(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SemestR);