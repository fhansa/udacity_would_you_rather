import { Actions } from '../actions/users'

export default function loginUser (state = {id:null}, action) {

  switch(action.type) {
    case Actions.LOGIN_USER : 
      return {
        id: action.loginUser
      }
    case Actions.LOGOUT_USER : 
      return {
        id: null
      }
    default :
      return state
  }
}