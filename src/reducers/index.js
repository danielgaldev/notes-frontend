import {combineReducers} from 'redux';
import notes from "./notes";

const denApp = combineReducers({
    notes,
})

export default denApp;