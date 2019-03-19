const initialState = [];


export default function notes(state = initialState, action) {
  let semesterList = state.slice();

  switch (action.type) {

    case 'FETCH_SEMESTERS':
      return [...state, ...action.semesters];

    case 'DELETE_SEMESTER':
      semesterList.splice(action.index, 1);
      return semesterList;

    default:
      return state;
  }
}
