import { combineReducers } from 'redux'
import questions from './questions';
import users from './users';
import loginUser from './loginUser';

export default combineReducers({
  questions, 
  users,
  loginUser
})