import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCV5xZoBnNCwYVHaqWQYq6FC51GYFoyVgc",
    authDomain: "bbva-907f5.firebaseapp.com",
    databaseURL: "https://bbva-907f5-default-rtdb.firebaseio.com",
    projectId: "bbva-907f5",
    storageBucket: "bbva-907f5.appspot.com",
    messagingSenderId: "1487459661",
    appId: "1:1487459661:web:9597e5f107e73e96c31304",
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;