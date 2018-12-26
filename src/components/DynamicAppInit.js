import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';
import FirebaseInit from '../InitFirebase';
import LoginForm from './LoginForm';
import SummaryList from './SummaryList';
import { Spinner } from './common';

class DynamicAppInit extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    FirebaseInit();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState( {loggedIn: true });
      } else {
        this.setState( {loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
        case true:
          return Actions.reset("main");

      case false:
          return Actions.reset("auth");

      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
  
}

export default DynamicAppInit;
