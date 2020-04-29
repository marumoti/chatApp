import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBwkRsw2yVuy_3JZtwcjIyQycWrWpiPgSo",
    authDomain: "chatapp-343fd.firebaseapp.com",
    databaseURL: "https://chatapp-343fd.firebaseio.com",
    projectId: "chatapp-343fd",
    storageBucket: "chatapp-343fd.appspot.com",
    messagingSenderId: "1034231528392",
    appId: "1:1034231528392:web:0405ca9a1150d96b169efd",
    measurementId: "G-GWTH1LERBE"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()

