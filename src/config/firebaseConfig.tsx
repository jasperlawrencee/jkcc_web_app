// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXASO_oH9hCKCUlogAWqhCME7I4e5avW0",
  authDomain: "jasperkissa-c31ed.firebaseapp.com",
  projectId: "jasperkissa-c31ed",
  storageBucket: "jasperkissa-c31ed.firebasestorage.app",
  messagingSenderId: "372212932991",
  appId: "1:372212932991:web:ecd9a08defcbfcf2dc3a4a",
  measurementId: "G-4Y1LWB0DWT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence);

export {auth, db};
