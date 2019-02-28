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



