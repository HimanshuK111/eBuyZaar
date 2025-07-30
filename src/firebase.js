import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCHV6tVsCSSArFQc4ls2P0d133Fa83XKtI",
  authDomain: "ebuyzaar.firebaseapp.com",
  projectId: "ebuyzaar",
  storageBucket: "ebuyzaar.firebasestorage.app",
  messagingSenderId: "1049064703542",
  appId: "1:1049064703542:web:85251c425216e027943a97",
  measurementId: "G-GS5GY4H924"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth , createUserWithEmailAndPassword, signInWithEmailAndPassword };

