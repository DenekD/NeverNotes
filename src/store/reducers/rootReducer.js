import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import notesReducer from "./notesReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
  ui: uiReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
