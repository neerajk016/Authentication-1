import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfeTHVckE9qZoZX25_7mKhFydRS796dB8",
  authDomain: "auth-67f2d.firebaseapp.com",
  projectId: "auth-67f2d",
  storageBucket: "auth-67f2d.appspot.com",
  messagingSenderId: "775496773679",
  appId: "1:775496773679:web:77d0e3f82a623bb81f96da"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebaseApp.auth();

export default db;
export { auth };
 