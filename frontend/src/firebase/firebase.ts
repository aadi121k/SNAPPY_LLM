import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqLwt76wiURItXpZHiFYpwzGOlAlv_38c",
  authDomain: "snappy-llm.firebaseapp.com",
  projectId: "snappy-llm",
  storageBucket: "snappy-llm.firebasestorage.app",
  messagingSenderId: "863437961827",
  appId: "1:863437961827:web:0cffba7e425638acf49656",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();