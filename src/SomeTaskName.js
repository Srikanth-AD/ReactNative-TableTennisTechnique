import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { configFirebase, configSampleUser } from '../env.json';

module.exports = async (taskData) => {

  console.log(taskData);

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: configFirebase.apiKey,
      authDomain: configFirebase.authDomain,
      databaseURL: configFirebase.databaseURL,
      projectId: configFirebase.projectId,
      storageBucket: configFirebase.storageBucket,
      messagingSenderId: configFirebase.messagingSenderId
    });
  }

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      console.log("setPersistence");
      console.log("current user email", firebase.auth().currentUser.email);
      return firebase.auth()
        .signInWithEmailAndPassword(configSampleUser.username,
        configSampleUser.password);
    })
    .then(function() {
      console.log("async current user", firebase.auth().currentUser.email);
      firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/summary`)
      .push(taskData)
      .catch(function(error) {
        console.log("db write", error);
      });
    })
    .catch(function(error) {
      console.log("setPersistence", error);
    });
};
