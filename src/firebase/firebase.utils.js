import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCdOejIL8VQDzcFXMrjM0lIspn98rBy4s4',
  authDomain: 'berrys-77953.firebaseapp.com',
  databaseURL: 'https://berrys-77953.firebaseio.com',
  projectId: 'berrys-77953',
  storageBucket: 'berrys-77953.appspot.com',
  messagingSenderId: '76617372378',
  appId: '1:76617372378:web:96b899d896f392a2d04be3',
  measurementId: 'G-2VGF9E1TT9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;