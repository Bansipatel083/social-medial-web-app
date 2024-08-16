// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbczNsr1amFT2nPxjYhly9GtnQqE5AcHo",
  authDomain: "kmper-be258.firebaseapp.com",
  projectId: "kmper-be258",
  storageBucket: "kmper-be258.appspot.com",
  messagingSenderId: "413316724689",
  appId: "1:413316724689:web:fcd1d2da68c8ab6e4412f0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(); 
const storage = getStorage();

export {app, db, storage};