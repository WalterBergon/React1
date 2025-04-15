// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjKhU0MmlnwrPwfjHlQEWyIF_k6fQWIEI",
    authDomain: "entrega-75915-coder.firebaseapp.com",
    projectId: "entrega-75915-coder",
    storageBucket: "entrega-75915-coder.firebasestorage.app",
    messagingSenderId: "759331756503",
    appId: "1:759331756503:web:24d05a0229de4f9e265392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
