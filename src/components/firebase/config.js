// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from firebase/getFirestore;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ0kCEg4mrc-FW5YD_jJuiwY1YEMXjkCg",
    authDomain: "matear-e5361.firebaseapp.com",
    projectId: "matear-e5361",
    storageBucket: "matear-e5361.appspot.com",
    messagingSenderId: "1007453625637",
    appId: "1:1007453625637:web:2ba1d30bc9097771ea4ecc",
    measurementId: "G-CNWE9HK78C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(db);