import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBjBoccLaBJ_gXm9ompxxv8hN0zEen1QAY",
    authDomain: "grocerystore-67e31.firebaseapp.com",
    databaseURL: "https://grocerystore-67e31.firebaseio.com",
    projectId: "grocerystore-67e31",
    storageBucket: "grocerystore-67e31.appspot.com",
    messagingSenderId: "1011339448536",
    appId: "1:1011339448536:web:6f4bc248147cc5c5c5c7ad",
    measurementId: "G-XGYEYFDR1Z"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;