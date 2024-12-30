import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

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
export const auth = getAuth(app);