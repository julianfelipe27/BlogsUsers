import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgJjd9gC8rS6ybyxt20v27V8bcAbgXHKs",
    authDomain: "usuarios-cf2a5.firebaseapp.com",
    databaseURL: "https://usuarios-cf2a5.firebaseio.com",
    projectId: "usuarios-cf2a5",
    storageBucket: "usuarios-cf2a5.appspot.com",
    messagingSenderId: "974081472101",
    appId: "1:974081472101:web:f6da895090128800"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase