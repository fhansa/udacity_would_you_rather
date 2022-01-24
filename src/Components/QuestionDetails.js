import { connect, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { placeVote } from '../actions/questions';
import { addAnswerToUser } from '../actions/users';
import Avatar from './Avatar';

/**
 * Render one question
 * 
 * @param {*} props 
 * @returns 
 */
function QuestionDetails(props) {

  const dispatch = useDispatch();
  const nav = useNavigate();

  const {question, author, questionStatus, currentUser} = props;

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const sumVotes = optionTwoVotes + optionOneVotes;

  const optionOnePct = sumVotes > 0 ? optionOneVotes / sumVotes * 100: 0;
  const optionTwoPct = sumVotes > 0 ? optionTwoVotes / sumVotes * 100: 0;

  const handleVote = (option) => {
    const vote = {
      userId: currentUser.id,
      questionId: question.id,
      selectedOption: option
    }
    dispatch(placeVote(vote));
    dispatch(addAnswerToUser(vote));

    // Goto home 
    nav("/");
  }

  const optionOneSelectedByUser = question.optionOne.votes.includes(currentUser.id);
  const optionTwoSelectedByUser = question.optionTwo.votes.includes(currentUser.id);


  return (
    <div className="question-details">
        <div className="author">
          <h4>This one is by:</h4>
          <div>
            <Avatar user={author} /> 
            <div className="userInfo">
              <p>Author: {author.name}</p>
              <p>Username: {author.id}</p>
            </div>
          </div>
        </div>
        <div className="question">
          <h3>Would you rather...</h3>
          <div className="question-options">
            <div className="option">
              <p className={optionOneSelectedByUser ? "question_answered" : ""} >{question && question.optionOne.text}</p> 

              {
                questionStatus === "unanswered" && <button onClick={ () => handleVote(1) }>Vote</button>
              }
              {
                questionStatus === "answered" && 
                  <span>
                    <p>Votes: {optionOneVotes} { optionOnePct} % </p>
                  </span>
              }

            </div>
            <div className="option">
              <p className={optionTwoSelectedByUser ? "question_answered" : ""}>{question && question.optionTwo.text}</p> 

              {
                questionStatus === "unanswered" && <button onClick={() => handleVote(2) }>Vote</button>
              }
              {
                questionStatus === "answered" && 
                  <span>
                    <p>Votes: {optionTwoVotes} { optionTwoPct} % </p>
                  </span>
              }

            </div>
            
          </div>
        </div>
      </div>
  )

}

/*
 *    Find question and the author of the question
 */
function mapProps({questions, users, loginUser}, props) {
  const {questionId} = props.params;  // "Hack" - se below....

  const question = questions[questionId];
  const author = users[question.author];
  const currentUser = users[loginUser.id];
  const questionStatus = Object.keys(currentUser.answers).includes(questionId) ? "answered" : "unanswered";

  return (
    {
      question,
      author,
      questionStatus,
      currentUser
    }
  )
}


/**
 *    Since react router v6 no longer support withRouter this is needed. 
 *    This is a simulation of old withRouter in order to be able to use mapProps
 *    properly... (if not the component needs to be rewritten to use useSelector instead of connect) 
 */
const withRouter = WrappedComponent => props => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

export default withRouter(connect(mapProps)(QuestionDetails));