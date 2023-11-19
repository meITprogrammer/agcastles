import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAutjBecnnmqFQOAdopCmpRwebqLj-uIeA",
  authDomain: "agcastle-8a456.firebaseapp.com",
  projectId: "agcastle-8a456",
  storageBucket: "agcastle-8a456.appspot.com",
  messagingSenderId: "753960975318",
  appId: "1:753960975318:web:c8f35e3676dc9daa620277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const databse = getDatabase(app);
export const storage = getStorage(app);
export const colRef = collection(db, "products");