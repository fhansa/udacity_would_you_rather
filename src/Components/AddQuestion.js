import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addQuestion, questionNewId } from '../actions/questions';
import { addQuestionToAuthor } from '../actions/users';

function AddQuestion(props) {

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSave = () => {

    const qid = questionNewId();

    const question = {
      id : qid,
      author: props.loginUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo
    }

    const addToAuthor = {
      author: props.loginUser,
      questionId: qid,
    }

    dispatch(addQuestion(question));
    dispatch(addQuestionToAuthor(addToAuthor));

    nav("/");
  }

  const handleCancel = () => {
    nav("/");
  }

  return (
      <div>
        <h1>Add Question</h1>
        <h2>Would you rather...</h2>
        <input type="text>" value={optionOne} onChange={ (e) => setOptionOne(e.target.value)}/>
        OR
        <input type="text>" value={optionTwo} onChange={ (e) => setOptionTwo(e.target.value)}/>
        <p></p>
        <button onClick={ () => handleSave() }>Save</button>
        <button onClick={ () => handleCancel() }>Cancel</button>
      </div>
  )

}

function mapProps({loginUser}) {
  return {
    loginUser
  }
}

export default connect(mapProps)(AddQuestion)