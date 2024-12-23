// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtvxpjrUhirkgCpW6Qru_nzSWXCVlpKcY",
  authDomain: "itlaaproject.firebaseapp.com",
  projectId: "itlaaproject",
  storageBucket: "itlaaproject.firebasestorage.app",
  messagingSenderId: "300228834885",
  appId: "1:300228834885:web:ceda84f884aa1c4d7ad52c",
  measurementId: "G-ERRDXJ32N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);