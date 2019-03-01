export const addNote = text => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    return fetch("http://localhost:8000/notes/messages/", {headers, method: "POST", body})
      .then(res => res.json())
      .then(note => {
        return dispatch({
          type: 'ADD_NOTE',
          note
        })
      })
  }
}

export const updateNote = (index, text) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    let messageId = getState().notes[index].id;
    return fetch(`http://localhost:8000/notes/messages/${messageId}/`, {headers, method: "PUT", body})
      .then(res => res.json())
      .then(note => {
        return dispatch({
          type: 'UPDATE_NOTE',
          note,
          index
        })
      })
  }
}

export const deleteNote = (index) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let messageId = getState().notes[index].id;
    return fetch(`http://localhost:8000/notes/messages/${messageId}/`, {headers, method: "DELETE"})
      .then(res => {
        if (res.ok) {
          return dispatch({
            type: 'DELETE_NOTE',
            index
          })
        }
    })
  }
}

export const fetchNotes = () => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("http://localhost:8000/notes/messages/", {headers, })
      .then(res => res.json())
      .then(notes => {
        return dispatch({
          type: 'FETCH_NOTES',
          notes
        })
      })
  }
}


