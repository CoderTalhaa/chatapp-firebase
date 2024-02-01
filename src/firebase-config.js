import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBFbEZ2Z3Af3ObpePPuUBiDImHID71_Ick",
  authDomain: "zeyrox-hub.firebaseapp.com",
  projectId: "zeyrox-hub",
  storageBucket: "zeyrox-hub.appspot.com",
  messagingSenderId: "278649519319",
  appId: "1:278649519319:web:7aa61341505a5a6bd80492"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)