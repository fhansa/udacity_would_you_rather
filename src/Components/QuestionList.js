import Question from './Question';
import { useState } from 'react';
import { connect } from 'react-redux';

function QuestionList(props) {

    const {qids, qidsStatus} = props;
    const [filter, setFilter] = useState("unanswered")
    
    const handleFilterSelect = (filter) => {
      setFilter(filter);
    }

    return (
        <div className="question-container">
          <div className="question-list-filter">
            <button className={ filter === "unanswered" ? "filter-selected" : ""} onClick={ (e) => handleFilterSelect("unanswered")}>Unanswered</button>
            <button className={ filter === "answered" ? "filter-selected" : ""} onClick={ (e) => handleFilterSelect("answered")}>Answered</button>
          </div>
          <ul className="question-list">
              { 
                  // Present questions based on selected filter
                  qids.filter( (f) => qidsStatus[f] === filter).map( (q) => (

                      <li key={q}><Question id={q} status={filter}/></li>
                  ))
              }
          </ul>
        </div>
    )

}

function mapProps ({ questions, loginUser }) {

  const qids = Object.keys(questions).sort( (a,b) => questions[b].timestamp - questions[a].timestamp);

  // Create a dictionary containing the status for each question for current user
  // I.e qidsResult[questionID] = status
  // 
  const qidsStatus = qids.reduce( (res, qid) => {
    if (questions[qid].optionOne.votes.includes(loginUser.id) || 
        questions[qid].optionTwo.votes.includes(loginUser.id)) {
          res[qid] = "answered";
        } else {
          res[qid] = "unanswered";
        }
        return res;
  }, {});

  return {
    qids, 
    qidsStatus,
  }
}

export default connect(mapProps)(QuestionList);
