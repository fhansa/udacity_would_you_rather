export const Actions = {
  GET_USERS :   'GET_USERS',
  LOGIN_USER:   'LOGIN_USER',
  LOGOUT_USER:  'LOGOUT_USER'
}; 

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