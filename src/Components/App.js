import React from 'react';
import {Routes, Route, useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion';
import QuestionDetails from './QuestionDetails';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';
import NavMenu from './NavMenu';
import Login from './Login';
import Welcome from './Welcome';

import {getInitialData} from '../actions/shared';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  

  render() {
    const userid = this.props.loginUser.id;

    console.log("USER", userid);
    console.log(this.props);

    return (
      <div className="App">
        <NavMenu />
        <div className="app-container">
          <Routes>

            { userid && <Route exact path="/" element={<QuestionList />}></Route> }
            { userid && <Route exact path="/add" element={<AddQuestion />}></Route> }
            { userid && <Route exact path="/leaderboard" element={<Leaderboard />}></Route> }
            { userid && <Route exact path="/question/:questionId" element={<QuestionDetails />}></Route> }
            { userid && <Route path="*" element={<NotFound />} /> }

            <Route exact path="/login" element={<Login />}></Route>
            { !userid && <Route exact path="/" element={<Welcome />}></Route> }
            { !userid && <Route path="*" element={<Login />} /> }

          </Routes>
          </div>
      </div>
    );
  }
}

function mapProps({loginUser}) {
  return (
    {
      loginUser
    }
  )
}

export default connect(mapProps)(App);