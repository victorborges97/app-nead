import * as firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByeIN5pjw-iaPpfznEp6LzDavpsAXOPbs",
  authDomain: "cead-8aea0.firebaseapp.com",
  databaseURL: "https://cead-8aea0.firebaseio.com",
  projectId: "cead-8aea0",
  storageBucket: "cead-8aea0.appspot.com",
  messagingSenderId: "624206492154",
  appId: "1:624206492154:web:ee9f1d4fd5e74a54f3b443",
  measurementId: "G-YHH4G8K6X8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Firestore = firebase.firestore()
const RealTime = firebase.database()
const Storage = firebase.storage()


export {
  Firestore,
  RealTime,
  Storage
}