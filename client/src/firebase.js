import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyC4gACJVYwpAqH_nOHcuuV3xj2mwiTBaBY",
    authDomain: "ftx-shopreward.firebaseapp.com",
    projectId: "ftx-shopreward",
    storageBucket: "ftx-shopreward.appspot.com",
    messagingSenderId: "545723185592",
    appId: "1:545723185592:web:f924fd145270bb595ab74d",
    measurementId: "G-1W8XLYEFW3"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase.app().options);   