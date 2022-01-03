import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion';
import Question from './Question';
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

    return (
      <div className="App">
        <NavMenu />
        <div className="app-container">
          <Routes>

            { userid && <Route exact path="/" element={<QuestionList />}></Route> }
            { !userid && <Route exact path="/" element={<Welcome />}></Route> }
            <Route exact path="/add" element={<AddQuestion />}></Route>
            <Route exact path="/question/:id" element={<Question />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="*" element={<NotFound />} />
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