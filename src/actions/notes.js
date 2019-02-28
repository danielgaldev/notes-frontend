export const addNote = text => ({
  type: 'ADD_NOTE',
  text
})

export const updateNote = (id, text) => ({
  type: 'UPDATE_NOTE',
  id,
  text
})

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  id
})

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


