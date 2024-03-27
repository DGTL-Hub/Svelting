
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ9xE0ovyelXDUd0ihtdRFVosj_Z4Hr4M",
  authDomain: "digitaluniverse-4fa49.firebaseapp.com",
  projectId: "digitaluniverse-4fa49",
  storageBucket: "digitaluniverse-4fa49.appspot.com",
  messagingSenderId: "829890532565",
  appId: "1:829890532565:web:7401dd73ce86434c31fe5c",
  measurementId: "G-BT4D8BXR03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);