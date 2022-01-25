/**
 *  Main Application Component
 * 
 */
import React from 'react';
import {Routes, Route } from 'react-router-dom';
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
    // Read all neccessary data from backend
    // TODO: In real app this would probably be done after login
    this.props.dispatch(getInitialData());
  }

  render() {
    const userid = this.props.loginUser.id;

    return (
      <div className="App">
        <NavMenu />
        <div className="app-container">
          <Routes>

            { userid && <Route exact path="/" element={<QuestionList />}></Route> }
            { userid && <Route exact path="/add" element={<AddQuestion />}></Route> }
            { userid && <Route exact path="/leaderboard" element={<Leaderboard />}></Route> }
            { userid && <Route exact path="/questions/:questionId" element={<QuestionDetails />}></Route> }
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

/**
 *  Component needs loginUser from Store
*/
function mapProps({loginUser}) {
  return (
    {
      loginUser
    }
  )
}

export default connect(mapProps)(App);