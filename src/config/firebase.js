import firebase from 'firebase/compat/app'; // Import Firebase from 'firebase/compat/app'
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAvi3F5iDdJXHYrjDe8p_Lk9mwKKA8wqi4",
  authDomain: "apolo27-12ab2.firebaseapp.com",
  projectId: "apolo27-12ab2",
  storageBucket: "apolo27-12ab2.appspot.com",
  messagingSenderId: "603615465183",
  appId: "1:603615465183:web:8c5f506d2b1b4e902f636a"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;