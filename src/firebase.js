// import firebase from "firebase";
import * as firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWpdQGsi9Caj8uc_rgcpabgMbt6QYUZJs",
  authDomain: "urconnect-21289.firebaseapp.com",
  projectId: "urconnect-21289",
  storageBucket: "urconnect-21289.appspot.com",
  messagingSenderId: "96143785608",
  appId: "1:96143785608:web:96fae42122bf04e3f1293d",
  measurementId: "G-2ZZVGQJSPH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db };
