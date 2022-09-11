// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjp8_bO8B7ZlHJMLFQlqQjODvSySYCQI0",
  authDomain: "instagram-clone-be3d7.firebaseapp.com",
  projectId: "instagram-clone-be3d7",
  storageBucket: "instagram-clone-be3d7.appspot.com",
  messagingSenderId: "702758599412",
  appId: "1:702758599412:web:2fed72eaa3b6b9188dbca1",
  measurementId: "G-00RFYC4PND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
