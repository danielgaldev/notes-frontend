import {combineReducers} from 'redux';
import notes from "./notes";
import auth from "./auth";

const denApp = combineReducers({
    notes, auth
})

export default denApp;