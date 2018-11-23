import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { configFirebase, configSampleUser } from '../env.json';

export default async () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: configFirebase.apiKey,
      authDomain: configFirebase.authDomain,
      databaseURL: configFirebase.databaseURL,
      projectId: configFirebase.projectId,
      storageBucket: configFirebase.storageBucket,
      messagingSenderId: configFirebase.messagingSenderId
    });
    console.log('Firebase init');
  }
};
