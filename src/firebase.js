// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlfPwHKnFvvu229kc3_Ahb28dSA1vHbXs",
  authDomain: "twitter-clone-fcd56.firebaseapp.com",
  projectId: "twitter-clone-fcd56",
  storageBucket: "twitter-clone-fcd56.appspot.com",
  messagingSenderId: "486748526571",
  appId: "1:486748526571:web:091620ca6efa5fb3772bae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
