// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMGvo6PVo17fVun2-1anowNdkWlzxCcXg",
  authDomain: "aspira-21b6f.firebaseapp.com",
  projectId: "aspira-21b6f",
  storageBucket: "aspira-21b6f.appspot.com",
  messagingSenderId: "671633248537",
  appId: "1:671633248537:web:525e5e4407bda07c3a7588",
  measurementId: "G-3W7S1VB7KV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
