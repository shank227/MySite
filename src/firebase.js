// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBBldl2EjbJt-wVWaKvrMx-qukkL1h0NVg",
  authDomain: "insights-72077.firebaseapp.com",
  projectId: "insights-72077",
  storageBucket: "insights-72077.firebasestorage.app",
  messagingSenderId: "76145723712",
  appId: "1:76145723712:web:e620a7ca013d39ceeb92a5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
