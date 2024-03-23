// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFireStore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCScOJZZUnCj3AmSxVE_8EO3Dp5WWM1uHo",
  authDomain: "im-db-9a2dc.firebaseapp.com",
  projectId: "im-db-9a2dc",
  storageBucket: "im-db-9a2dc.appspot.com",
  messagingSenderId: "688774397503",
  appId: "1:688774397503:web:164b8bb3a8e4851e06028a",
  measurementId: "G-TG9TDNZY3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export {db}