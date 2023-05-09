// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_GZEEeCaD4HQFsaiy1pdrXpoLUuJLmh8",
  authDomain: "fir-auth-a5dd5.firebaseapp.com",
  projectId: "fir-auth-a5dd5",
  storageBucket: "fir-auth-a5dd5.appspot.com",
  messagingSenderId: "640332542531",
  appId: "1:640332542531:web:44e990a74025449e6f5af6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app
