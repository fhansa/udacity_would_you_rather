export const Actions = {
  GET_USERS :   'GET_USERS',
  LOGIN_USER:   'LOGIN_USER',
  LOGOUT_USER:  'LOGOUT_USER',
  ADD_QUESTION_TO_AUTHOR : 'ADD_QUESTION_TO_AUTHOR',
  ADD_ANSWER_TO_USER : 'ADD_ANSWER_TO_USER',
}; 

export function addAnswerToUser(answer) {
  return {
    type: Actions.ADD_ANSWER_TO_USER,
    questionId : answer.questionId,
    selectedOption: answer.author,
    userId : answer.userId
  }
}



export function addQuestionToAuthor(question) {

  return {
    type: Actions.ADD_QUESTION_TO_AUTHOR,
    questionId : question.questionId,
    author: question.author,
  }
}

export function getUsers (users) {
  return {
    type: Actions.GET_USERS,
    users,
  }
}

export function loginUser (id) {
  return {
    type: Actions.LOGIN_USER,
    loginUser: id,
  }
}

export function logoutUser (id) {
  return {
    type: Actions.LOGOUT_USER,
    loginUser: null,
  }
}