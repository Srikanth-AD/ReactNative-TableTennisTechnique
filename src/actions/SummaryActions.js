import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {
  SUMMARIES_FETCH_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';

export const summariesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/summary`)
    .on('value', snapshot => {
      //console.log("snapshot.val()", snapshot.val());
      dispatch({ type: SUMMARIES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
