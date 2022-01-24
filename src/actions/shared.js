import { _getQuestions, _getUsers } from '../api/_DATA';
import { getQuestions } from './questions';
import { getUsers } from './users';

export function getInitialData () {
  return (dispatch) => {

    return Promise.all([
      _getQuestions(),
      _getUsers(),
    ])
    .then( ([questions, users]) => {
      dispatch(getQuestions(questions));
      dispatch(getUsers(users));
    });     
  }  
}