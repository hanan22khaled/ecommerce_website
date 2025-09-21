import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO3pf1Fe--yN8mmEldZLSToQhEkcub1hY",
  authDomain: "shopping-d3135.firebaseapp.com",
  projectId: "shopping-d3135",
  storageBucket: "shopping-d3135.firebasestorage.app",
  messagingSenderId: "1078044913352",
  appId: "1:1078044913352:web:83db0ca6d9c802db59fffd",
  measurementId: "G-64TDPBX2XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);