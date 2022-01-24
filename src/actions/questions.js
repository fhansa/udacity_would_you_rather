export const Actions = {
  GET_QUESTIONS : 'GET_QUESTIONS',
  ADD_QUESTION : 'ADD_QUESTION',
  PLACE_VOTE : 'PLACE_VOTE'
}; 

export function questionNewId() {
  // This is not a good solution for a real system but will work for now....
  return "ID" + Date.now().toString() + Math.random().toString();
}

export function placeVote(vote) {
  return {
    type: Actions.PLACE_VOTE,
    vote: {
      userId: vote.userId,
      questionId: vote.questionId,
      selectedOption: vote.selectedOption
    }
  }
}


export function addQuestion(newQuestion) {


  console.log("ADD_Q_ACTION", newQuestion);

  // Generate an ID if not already generated
  const id = newQuestion.id && questionNewId();

  return {
    type: Actions.ADD_QUESTION,
    question : {
      id: id,
      author: newQuestion.author.id,
      optionOne: { votes:[], text: newQuestion.optionOneText},
      optionTwo: { votes:[], text: newQuestion.optionTwoText},
      timestamp: Date.now()
    }
  }
}

export function getQuestions (questions) {
  return {
    type: Actions.GET_QUESTIONS,
    questions,
  }
}