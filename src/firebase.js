// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API}`,
  authDomain: `${process.env.REACT_APP_AUTH}`,
  projectId: `${process.env.REACT_APP_Id}`,
  storageBucket: `${process.env.REACT_APP_Bucket}`,
  messagingSenderId: `${process.env.REACT_APP_SenderId}`,
  appId: `${process.env.REACT_APP_appId}`
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()