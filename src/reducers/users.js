import { Actions } from '../actions/users'

export default function users (state = {}, action) {

  switch(action.type) {
    case Actions.GET_USERS :
      return {
        ...state,
        ...action.users
      }
    default :
      return state
  }
}