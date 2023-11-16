import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBS9MGu3RiLlh-9fT1rTRhY8WMpE0Wzf0g",
  authDomain: "test-database-c9996.firebaseapp.com",
  projectId: "test-database-c9996",
  storageBucket: "test-database-c9996.appspot.com",
  messagingSenderId: "684259105418",
  appId: "1:684259105418:web:3c0d319e973a8e53dbeb73",
  measurementId: "G-ENPQCF06B5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app);
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);
export { auth, firestore, db, firebase, functions };