import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
 
var firebaseConfig = {
    apiKey: "AIzaSyB1vXo5UTD5Wm0tCLYgMeKOTgn2_IVZPW8",
    authDomain: "u-dairy-bd.firebaseapp.com",
    databaseURL: "https://u-dairy-bd.firebaseio.com",
    projectId: "u-dairy-bd",
    storageBucket: "u-dairy-bd.appspot.com",
    messagingSenderId: "1070878903270",
    appId: "1:1070878903270:web:d81d7ba3dd09f24d6f6427"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db=firebase.firestore()
const auth=firebase.auth()


export {db, auth}
