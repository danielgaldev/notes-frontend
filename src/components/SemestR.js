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

  resetForm = () => {
    this.setState({ text: "", updateNoteId: null });
  }

  selectForEdit = (id) => {
    let note = this.props.notes[id];
    this.setState({ text: note.text, updateNoteId: id });
  }

  submitNote = (e) => {
    e.preventDefault();
    if (this.state.updateNoteId === null) {
      this.props.addNote(this.state.text).then(this.resetForm);
    } else {
      this.props.updateNote(this.state.updateNoteId, this.state.text).then(this.resetForm);
    }
  }

  render() {
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
              {this.props.semesters.map((semester) => (
                <tr key={`semester_${semester.id}`}>
                  <td>{semester.number.toString().concat('. semester')}</td>
                  <td className="collapsing"><button
                    className="ui icon button"
                    onClick={() => this.props.deleteNote(semester.id)}>
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
    // addNote: (text) => {
    //   return dispatch(notes.addNote(text));
    // },
    // updateNote: (id, text) => {
    //   return dispatch(notes.updateNote(id, text));
    // },
    // deleteNote: (id) => {
    //   return dispatch(notes.deleteNote(id));
    // },
    fetchSemesters: () => {
      return dispatch(semesters.fetchSemesters());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SemestR);