import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAlekcuUuN5sGsunshwL9haxZP8LeIFfRE",
    authDomain: "algorutas.firebaseapp.com",
    databaseURL: "https://algorutas-default-rtdb.firebaseio.com",
    projectId: "algorutas",
    storageBucket: "algorutas.appspot.com",
    messagingSenderId: "610579277229",
    appId: "1:610579277229:web:efe4acc64c3c707ee1ed24",
    measurementId: "G-R6KDDLQ5DR"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;