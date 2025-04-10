// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZD6i19fsrS8fOTNw8RUlUKBX3Ej7r4-U",
  authDomain: "ragatdatabase.firebaseapp.com",
  projectId: "ragatdatabase",
  storageBucket: "ragatdatabase.firebasestorage.app",
  messagingSenderId: "912443289376",
  appId: "1:912443289376:web:668fac5fb38012be0cb145",
  measurementId: "G-50SDME727L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);

  