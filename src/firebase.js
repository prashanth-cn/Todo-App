import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALe-Gyu3QwFNzLHfn6IUOWOzS8z83snKg",
    authDomain: "todo-5490b.firebaseapp.com",
    projectId: "todo-5490b",
    storageBucket: "todo-5490b.appspot.com",
    messagingSenderId: "1040479180664",
    appId: "1:1040479180664:web:e0de94b32e20fd4b67da8d",
    measurementId: "G-XGRN0M9Y8S"
  });

const db = firebaseApp.firestore();

export default  db 