// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmeqKCeXK4UMvGuucTJuGumr9NdsD89Uw",
  authDomain: "quotation-8e43b.firebaseapp.com",
  projectId: "quotation-8e43b",
  storageBucket: "quotation-8e43b.appspot.com",
  messagingSenderId: "1028371546220",
  appId: "1:1028371546220:web:646445ce1770ad4f2f5849",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
