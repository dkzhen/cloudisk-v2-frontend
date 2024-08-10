// Import the Firebase SDK for JavaScript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_IWejeYcGlpPYeQ_4A00C_yGKy7_zPAs",
  authDomain: "cloudisk-c395b.firebaseapp.com",
  projectId: "cloudisk-c395b",
  storageBucket: "cloudisk-c395b.appspot.com",
  messagingSenderId: "582952637841",
  appId: "1:582952637841:web:a21e2e9a2339f5588ef630",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const firestore = getFirestore(app);

export { app, firestore };
