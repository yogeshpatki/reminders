import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { withRouter } from 'react-router-dom';
import {fireAuth} from '../config/fire'
import firebase from 'firebase'


const uiConfig = {
  signInFlow: 'redirect',
    signInSuccessUrl: '/home',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the reminders App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fireAuth}/>
      </div>
    )
  }
}

export default withRouter(Login);
