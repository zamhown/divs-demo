import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Header0 from './header/Header0.js';
import Header1 from './header/Header1.js';
import NotLoggedIn from './NotLoggedIn.js'
import LoggedIn from './LoggedIn.js'
import Login from './Login.js';
import SignUp from './SignUp.js';
import UserCenter from './UserCenter.js';
import '../css/App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App container">
          <Router history={hashHistory}>
              <Route path="/" component={Header0}/>
              <Route path="/login" component={Header0}/>
              <Route path="/signUp" component={Header0}/>
              <Route path="/loggedIn" component={Header1}/>
              <Route path="/loggedIn/*" component={Header1}/>
          </Router>
          <div className="row">
              <Router history={hashHistory}>
                  <Route path="/" component={NotLoggedIn}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/signUp" component={SignUp}/>
                  <Route path="/loggedIn" component={LoggedIn}/>
                  <Route path="/loggedIn/userCenter" component={UserCenter}/>
              </Router>
          </div>
      </div>
    );
  }
}

export default App;
