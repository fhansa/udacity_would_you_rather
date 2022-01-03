export const Actions = {
  GET_QUESTIONS : 'GET_QUESTIONS'
}; 

export function getQuestions (questions) {
  return {
    type: Actions.GET_QUESTIONS,
    questions,
  }
}