import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import searchReducer from './searchReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  search: searchReducer,
  navigation: navigationReducer,
  form: formReducer
});
