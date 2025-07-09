// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9XhtPbLX_FgzVSbXGCxFj2oRTUuzYqDU",
  authDomain: "farmer-web-forum.firebaseapp.com",
  projectId: "farmer-web-forum",
  storageBucket: "farmer-web-forum.firebasestorage.app",
  messagingSenderId: "973653172434",
  appId: "1:973653172434:web:c546b4af02db34cb0e8d0b",
  measurementId: "G-BKFS6WSVNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };