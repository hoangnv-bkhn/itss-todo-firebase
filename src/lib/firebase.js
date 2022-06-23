import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Qqpll0883FoKKqlbuLw0yZXThNkvS-A",
  authDomain: "fir-sample-itss.firebaseapp.com",
  projectId: "fir-sample-itss",
  storageBucket: "fir-sample-itss.appspot.com",
  messagingSenderId: "140224446913",
  appId: "1:140224446913:web:fb3d12cbc870f084a82f40",
  measurementId: "G-MLZDWMSPB5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);