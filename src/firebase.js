// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDphvOhLovcVPCtKc8ubItzZTuCTTHLKTc",
  authDomain: "linkedin-clone-42668.firebaseapp.com",
  projectId: "linkedin-clone-42668",
  storageBucket: "linkedin-clone-42668.appspot.com",
  messagingSenderId: "465034584227",
  appId: "1:465034584227:web:7972d58806c4e730fa9f16",
  measurementId: "G-F1F8X3XKHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);