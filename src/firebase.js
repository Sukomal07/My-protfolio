// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA2J6MSRJw06bipwbg89PC83xYTw55TAJ8",
  authDomain: "protfolio-sukomal07.firebaseapp.com",
  projectId: "protfolio-sukomal07",
  storageBucket: "protfolio-sukomal07.appspot.com",
  messagingSenderId: "416009791083",
  appId: "1:416009791083:web:7e09302d0070a54ec7b32e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()