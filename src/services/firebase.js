import firebase from 'firebase/compat/app'; // Import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'; // Import the authentication module	
import 'firebase/compat/database'; // Import the database module

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const user = process.env.REACT_APP_FIREBASE_AUTH_USER;
const password = process.env.REACT_APP_FIREBASE_AUTH_PASSWORD;

// Iniciar sesión automáticamente
firebase.auth().signInWithEmailAndPassword(user, password)
  .then((userCredential) => {
    // El usuario ha iniciado sesión correctamente
    const user = userCredential.user;
    // console.log('Usuario autenticado:', user);
  })
  .catch((error) => {
    // Manejar errores de inicio de sesión
    // console.error('Error al iniciar sesión:', error);
  });

export const auth = firebase.auth();
const database = firebase.database();

export default database;