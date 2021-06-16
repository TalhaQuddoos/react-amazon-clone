import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBjPgk1gf1nWJdovMJ5PZLOol8M0q-L_EA",
    authDomain: "clone-jun21.firebaseapp.com",
    projectId: "clone-jun21",
    storageBucket: "clone-jun21.appspot.com",
    messagingSenderId: "238259577538",
    appId: "1:238259577538:web:c73273d90fe39a6db9115b",
    measurementId: "G-C3GP149499"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };