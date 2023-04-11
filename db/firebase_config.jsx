
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDCUyT0TiFD2obtoyzdshWFHiXgwTdlXk",
  authDomain: "tekarg-5139a.firebaseapp.com",
  projectId: "tekarg-5139a",
  storageBucket: "tekarg-5139a.appspot.com",
  messagingSenderId: "257865979879",
  appId: "1:257865979879:web:4b1c25f19f696bc2050f42"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore (app);
export default db