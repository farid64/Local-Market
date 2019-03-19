import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import searchReducer from "./searchReducer";

export default combineReducers({
  search: searchReducer,
  form: formReducer
});
