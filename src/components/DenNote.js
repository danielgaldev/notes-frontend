import React, { Component } from 'react';
import {connect} from 'react-redux';
import {notes} from '../actions';

class DenNote extends Component {
    state = {
        text: "",
        updateNoteId: null
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    resetForm = () => {
        this.setState({text: "", updateNoteId: null});
    }

    selectForEdit = (id) => {
        let note = this.props.notes[id];
        this.setState({text: note.text, updateNoteId: id});
    }

    submitNote = (e) => {
        e.preventDefault();
        if (this.state.updateNoteId === null) {
            this.props.addNote(this.state.text);
        } else {
            this.props.updateNote(this.state.updateNoteId, this.state.text);
        }
        this.resetForm();
    }
  
    render() {
        return (
            <div>
                <h2 className="ui header">Welcome to DenNote!</h2>
                <hr />
                <table className="ui collapsing celled table">
                    <tbody>
                        {this.props.notes.map((note, id) => (
                            <tr key={`note_${id}`}>
                                <td>{note.text}</td>
                                <td><button
                                    className="ui button"
                                    onClick={() => this.selectForEdit(id)}>
                                    Edit
                                </button></td>
                                <td><button
                                    className="ui button"
                                    onClick={() => this.props.deleteNote(id)}>
                                    Delete
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <form className="ui form" onSubmit={this.submitNote}>
                    <div className="field">
                        <label>Note text</label>
                        <input
                            type="text"
                            placeholder="Enter note here..."
                            value={this.state.text}
                            onChange={(e) => this.setState({text: e.target.value})}
                            required
                            />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                    <button className="ui button" onClick={this.resetForm}>Reset</button>
                </form>
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
        dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
        dispatch(notes.updateNote(id, text));
    },
    deleteNote: (id) => {
        dispatch(notes.deleteNote(id));
    },
    fetchNotes: () => {
        dispatch(notes.fetchNotes());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DenNote);