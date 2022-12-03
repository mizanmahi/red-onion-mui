// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf-Q9RRu-Fu8R_JTC48m5MSOmUM0rJGJA",
  authDomain: "red-onion-8efb7.firebaseapp.com",
  projectId: "red-onion-8efb7",
  storageBucket: "red-onion-8efb7.appspot.com",
  messagingSenderId: "553151281389",
  appId: "1:553151281389:web:f6640d6b3a7532fddb74e4",
  measurementId: "G-T9214T6TFD"
};

// Initialize Firebase
const initializeFirebase = () => initializeApp(firebaseConfig);
export default initializeFirebase;