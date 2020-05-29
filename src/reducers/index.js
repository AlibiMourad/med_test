import { combineReducers } from 'redux';
import { doctorsReducer } from './doctors';

export default combineReducers({
  doctors: doctorsReducer
});
