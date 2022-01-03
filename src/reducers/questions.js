import { Actions } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case Actions.GET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    default :
      return state
  }
}