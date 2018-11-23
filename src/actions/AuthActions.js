import {
  PASSWORD_CHANGED,
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password}) => {
  return (dispatch) => {

    dispatch({ type: LOGIN_USER });

    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    //   .then(function() {
    //     console.log("Firebase Auth: setPersistence for session");
    //     return firebase.auth()
    //       .signInWithEmailAndPassword(configSampleUser.username,
    //         configSampleUser.password);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        console.log("user doesn't exist in firebase, creating new user");
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
      });
    });
  }
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
