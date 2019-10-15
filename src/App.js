import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { userLogin, userLogout, loadUserData } from './actions/userLoginAction';
import { fireAuth } from './config/fire';
import asyncComponent from './AsyncComponent';
import Home from './components/Home';
import Header from './components/Header';
import { getUserData } from './data/userData';

const AsyncLogin = asyncComponent(()=> import('./components/Login'))

class App extends Component {

  componentDidMount() {
    fireAuth.onAuthStateChanged(this.handleOnLogin);
  }

  handleOnLogin = user => {
    console.log("Auth State Changed: User {}" );

    if (user) {
      if (!this.props.user) {
        const { displayName, uid } = user;
        this.props.dispatch(userLogin({ displayName, uid }));
        getUserData(uid).then(data => {
          this.props.dispatch(loadUserData(data));
        });
      }
    } else {
      this.props.dispatch(userLogout());
    }
  };

  notifyServiceWorkerUpdated = () => {
    console.log('new updates available.. please Reload');
  };
  
  componentWillMount() {
    window.onServiceWorkerUpdated(this.notifyServiceWorkerUpdated);
  }
  
  render() {
    const { user } = this.props;
    return (
    <div>
       <BrowserRouter>
          <div>
          <Header
              loggedIn={!!user}
              onLogout={e => {
                fireAuth.signOut().then(() => {
                  this.props.dispatch(userLogout());
                  window.location = 'login';
                });
              }}
            />
            <div className="App">
            <Route exact path="/" render={() => (
                !!user ? (
                  <Redirect to="/home"/>
                ) : (
                  <Redirect to="/login"/>
                )
              )}/>
              <Route path="/home" exact component={Home} />
              <Route path="/login" exact component={AsyncLogin} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);

