// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9BuXsuYVUDa_fRVJYB7aFbUILh0iqbUo",
  authDomain: "efit1023.firebaseapp.com",
  projectId: "efit1023",
  storageBucket: "efit1023.appspot.com",
  messagingSenderId: "562523747039",
  appId: "1:562523747039:web:c3d2998de3ffd990b92f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)