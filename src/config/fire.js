import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAwvwvyM8Hcu8wjoZOMl9bazI7WcrULQVE",
    authDomain: "miniproject-13986.firebaseapp.com",
    databaseURL: "https://miniproject-13986.firebaseio.com",
    projectId: "miniproject-13986",
    storageBucket: "miniproject-13986.appspot.com",
    messagingSenderId: "1019833717888",
    appId: "1:1019833717888:web:c727739963fc09aa538265",
    measurementId: "G-PV9B8NL32V"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;