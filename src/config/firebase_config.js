import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4H57iWzXjMaRkKdWp8-3nHbCBUv3FRzA",
  authDomain: "contact-app-94488.firebaseapp.com",
  projectId: "contact-app-94488",
  storageBucket: "contact-app-94488.appspot.com",
  messagingSenderId: "304004630776",
  appId: "1:304004630776:web:ab45b56e3377b1887d930d",
  measurementId: "G-ZPL530BK5M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
