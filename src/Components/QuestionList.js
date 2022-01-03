import Question from './Question';
import { useState } from 'react';
import { connect } from 'react-redux';

function QuestionList(props) {

    const {qids} = props;
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
                  qids.map( (q) => (
                      <li><Question key={q} id={q} /></li>
                  ))
              }
          </ul>
        </div>
    )

}

function mapProps ({ questions }) {

  const qids = Object.keys(questions).sort( (a,b) => questions[b].timestamp - questions[a].timestamp);
 
  return {
    qids
  }
}

export default connect(mapProps)(QuestionList);
