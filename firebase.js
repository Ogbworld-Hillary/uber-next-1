// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIJwCjXp4SOlmMvIBX7TQnMtURofPzQJE",
  authDomain: "uber-next-1-live.firebaseapp.com",
  projectId: "uber-next-1-live",
  storageBucket: "uber-next-1-live.appspot.com",
  messagingSenderId: "22528372944",
  appId: "1:22528372944:web:f51407fdc14ab9bab6aed5",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, analytics, provider, auth }
