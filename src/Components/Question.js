import { connect } from 'react-redux';

function Question(props) {
  const {question} = props;
  console.log("QUESTION", props);
  return (
    <div className="question">
      <h4 className="question-header">Which is worse???</h4>
      <div className="question-answers">
        <span>{question && question.optionOne.text}</span>
        
        <span>{question && question.optionTwo.text}</span>
      </div>
    </div> 
  )

}

function mapProps({questions}, props) {
  return ( {
    question: questions[props.id]
  })
}

export default connect(mapProps)(Question);