import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCmbk9nDHPvm1WZVxDe_B-SgZiJMWI8_gU",
  authDomain: "onlinestore-db-22344.firebaseapp.com",
  databaseURL: "https://onlinestore-db-22344.firebaseio.com",
  projectId: "onlinestore-db-22344",
  storageBucket: "onlinestore-db-22344.appspot.com",
  messagingSenderId: "361365421428",
  appId: "1:361365421428:web:66b6bc1819248321780021",
  measurementId: "G-T68QKXL2H1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
