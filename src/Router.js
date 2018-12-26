import React from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions, Scene, Router } from 'react-native-router-flux';
import DynamicAppInit from './components/DynamicAppInit';
import LoginForm from './components/LoginForm';
import SummaryList from './components/SummaryList';
import ForgotPassword from './components/ForgotPassword';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="init">
          <Scene key="dynamicAppInit" component={DynamicAppInit} title="Initializing.." />
        </Scene>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Table Tennis Technique" />
        </Scene>
        <Scene key="forgotPassword">
          <Scene
            key="forgotPasswordEmailForm"
            component={ForgotPassword}
            title="Forgot Password?" />
        </Scene>
        <Scene key="main">
          <Scene
            key="summaryList"
            component={SummaryList}
            title="Practice Summaries"
            onRight={() => { firebase.auth().signOut(); Actions.reset('auth');}}
            rightTitle = {'Log out'}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
