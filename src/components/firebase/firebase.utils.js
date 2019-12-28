import firebase from 'firebase/app';//this will pull the firebase utility library that belongs at this firbase/app

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBL9Ak7yGYLx9UmgmQZLee5Loc1qHXnf68",
  authDomain: "crwn-db-bc231.firebaseapp.com",
  databaseURL: "https://crwn-db-bc231.firebaseio.com",
  projectId: "crwn-db-bc231",
  storageBucket: "crwn-db-bc231.appspot.com",
  messagingSenderId: "407262590332",
  appId: "1:407262590332:web:88ac2b532697ece1e020f9",
  measurementId: "G-ZZK6HZJ7G5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } 
    catch (error) {
      console.log('error catching user', error.message);
    }


  }

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;