import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Render one question
 * 
 * @param {*} props 
 * @returns 
 */
function Question(props) {
  const {question, loginUser} = props;
  const nav = useNavigate();

  const optionOneSelected = question.optionOne.votes.includes(loginUser.id);
  const optionTwoSelected = question.optionTwo.votes.includes(loginUser.id);

  if(question === undefined) {
    nav('/notfound');
  }

  return (
    <div className="question">
      <Link to={"questions/" + question.id }>
        <h4 className="question-header">Which is worse???</h4>
        <div className="question-answers">
          <span className={optionOneSelected ? 'question_selected' : "" }>{question && question.optionOne.text}</span>
          
          <span className={optionTwoSelected ? 'question_selected' : ""}>{question && question.optionTwo.text}</span>
        </div>
      </Link> 
    </div>
  )

}

/**
 *  Map the requested question to component's props
 */
function mapProps({questions, loginUser}, props) {
  return ( {
    question: questions[props.id],
    loginUser
  })
}

export default connect(mapProps)(Question);