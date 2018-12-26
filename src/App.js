import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Platform, StyleSheet, View, Text} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import ReduxThunk from 'redux-thunk';
//import SummaryList from './components/SummaryList';
import { Actions } from 'react-native-router-flux';
import FirebaseInit from './InitFirebase';
import { configFirebase, configSampleUser } from '../env.json';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
