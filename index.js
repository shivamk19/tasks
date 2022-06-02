// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdAVFIbU7BjAEWMbJ80ImzGMZh3Ai3Qhs",
    authDomain: "test-website-ab610.firebaseapp.com",
    projectId: "test-website-ab610",
    storageBucket: "test-website-ab610.appspot.com",
    messagingSenderId: "558611072913",
    appId: "1:558611072913:web:86de6777cc96c9b7ad3c30",
    measurementId: "G-Z7NTV4FP6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
