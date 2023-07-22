// // Import the functions you need from the SDKs you need
// import firebase from "firebase/app"
// // import firebase from './firebase';
 
// import 'firebase/firestore';
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC3D5oAUxuh5W2HSLAgggTI5CmuZ6VfWLA",
//   authDomain: "fetch-and-update-users.firebaseapp.com",
//   projectId: "fetch-and-update-users",
//   storageBucket: "fetch-and-update-users.appspot.com",
//   messagingSenderId: "391288265819",
//   appId: "1:391288265819:web:13e86d7f9e77e72c7cb37e",
//   measurementId: "G-RFDZ7YMGLH"
// };

// // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
// // export const db = firebase.firestore();
// export const db=getFirestore(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3D5oAUxuh5W2HSLAgggTI5CmuZ6VfWLA",
  authDomain: "fetch-and-update-users.firebaseapp.com",
  projectId: "fetch-and-update-users",
  storageBucket: "fetch-and-update-users.appspot.com",
  messagingSenderId: "391288265819",
  appId: "1:391288265819:web:13e86d7f9e77e72c7cb37e",
  measurementId: "G-RFDZ7YMGLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
