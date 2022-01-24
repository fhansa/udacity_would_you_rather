import { useSelector } from 'react-redux';
import Avatar from './Avatar';
/**
 *  Selector for leaderboard
 */
function selectLeaderboard(state) {
  /* Build an array with object sorted by totQuestions
      { user-object, totQuestions, answered, asked }
  */


  const users = Object.values(state.users).map( (u) => (
    {
      user: u,
      totQuestions: Object.keys(u.answers).length + u.questions.length,
      asked: u.questions.length,
      answered: Object.keys(u.answers).length
    }
  )).sort( (a,b) => a.totQuestions > b.totQuestions)

  return users;

}

/**
 * Leaderboard
 * 
 */
function QuestionDetails(props) {

  const leaderboard = useSelector( state => selectLeaderboard(state));

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {
          leaderboard.map( l => (
            <li>
              <Avatar user={l.user} /> 
              <p>{l.user.name}</p>
              <p>Question asked: {l.asked}</p>
              <p>Question answered: {l.answered}</p>
            </li>
          ))
        }        
      </ul>
    </div>
  )

}

export default QuestionDetails;