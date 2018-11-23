import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SummaryList from './components/SummaryList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            key="summaryList"
            component={SummaryList}
            title="Summaries"
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
