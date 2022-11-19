
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLUEzbfgw4KibyHsUOl6wEbR0eBZkjCRs",
    authDomain: "game-in-297af.firebaseapp.com",
    projectId: "game-in-297af",
    storageBucket: "game-in-297af.appspot.com",
    messagingSenderId: "999710063620",
    appId: "1:999710063620:web:fc4d0c75d36c4610488951",
    measurementId: "G-KCB527Z8Q6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);