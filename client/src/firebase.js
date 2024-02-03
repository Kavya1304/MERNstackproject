// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kavya-estate.firebaseapp.com",
  projectId: "kavya-estate",
  storageBucket: "kavya-estate.appspot.com",
  messagingSenderId: "923106763717",
  appId: "1:923106763717:web:25488596661ed3fab061ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);