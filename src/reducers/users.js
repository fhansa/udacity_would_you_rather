import { Actions } from '../actions/users'

export default function users (state = {}, action) {

  switch(action.type) {
    case Actions.GET_USERS :
      return {
        ...state,
        ...action.users
      }
    case Actions.ADD_QUESTION_TO_AUTHOR :
      console.log("INSIDE REDUCER", state, action);
      const author = state[action.author.id];
      author.questions.push(action.questionId);
      return {
        ...state, [action.author.id] : author  
      }
    case Actions.ADD_ANSWER_TO_USER :

      const selectedOption = action.selectedOption === 1 ? "optionOne" : "optionTwo";

      return {
        ...state, 
        [action.userId] : {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId] : selectedOption
          }
        } 
      }

    default :
      return state
  }
}