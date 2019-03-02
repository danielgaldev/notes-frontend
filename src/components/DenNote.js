import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notes } from '../actions';

class DenNote extends Component {
  state = {
    text: "",
    updateNoteId: null
  }

  componentDidMount() {
    this.props.fetchNotes();
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
            DenNote
          </h3>
        </div>
        <div 
          className="ui container segment"
          style={{marginTop: "5em"}}>
        <form className="ui form" onSubmit={this.submitNote}>
            <div className="field">
              <h3 className="ui header">Submit your own note!</h3>
              <input
                type="text"
                placeholder="Enter note here..."
                value={this.state.text}
                onChange={(e) => this.setState({ text: e.target.value })}
                required
              />
            </div>
            <button className="ui button" type="submit">Submit</button>
            <button className="ui button" onClick={this.resetForm}>Reset</button>
          </form>
        <h3 className="ui header">Notes</h3>
        <table className="ui very basic table unstackable">
            <tbody>
              {this.props.notes.map((note, id) => (
                <tr key={`note_${id}`}>
                  <td>{note.text}</td>
                  <td className="collapsing"><button
                    className="ui icon button"
                    onClick={() => this.selectForEdit(id)}>
                    <i className="edit icon"></i>
                  </button></td>
                  <td className="collapsing"><button
                    className="ui icon button"
                    onClick={() => this.props.deleteNote(id)}>
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
    notes: state.notes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: (text) => {
      return dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
      return dispatch(notes.updateNote(id, text));
    },
    deleteNote: (id) => {
      return dispatch(notes.deleteNote(id));
    },
    fetchNotes: () => {
      return dispatch(notes.fetchNotes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DenNote);