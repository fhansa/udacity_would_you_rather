import { Actions } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case Actions.GET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case Actions.ADD_QUESTION :


      // Using current structure of redux store makes adding a new question uneccessary complex...
      // Really don't know how to update user-object in question-reducer... 
      // BUT: Adding a second action (addQuestionToUser) solves the problem but i don't like it

      return {
        ...state, 
        [action.question.id] : {...action.question}
      }
    case Actions.PLACE_VOTE :
 
      let optionOneVotes = state[action.vote.questionId].optionOne.votes;
      if (action.vote.selectedOption === 1) optionOneVotes.push(action.vote.userId);
      let optionTwoVotes = state[action.vote.questionId].optionTwo.votes;
      if (action.vote.selectedOption === 2) optionTwoVotes.push(action.vote.userId);
      
      const obj = {
        ...state,
        [action.vote.questionId] : { 
          ...state[action.vote.questionId], 
          optionOne : {
            votes : optionOneVotes,
            text : state[action.vote.questionId].optionOne.text
          },
          optionTwo : {
            votes : optionTwoVotes,
            text : state[action.vote.questionId].optionTwo.text
          } 
        }
      };
      return obj  
      
    default :
      return state
  }
}