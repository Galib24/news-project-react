// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuIEQot88oSxBfp7RGu0bGsHsLoAI1IJs",
  authDomain: "news-project-client.firebaseapp.com",
  projectId: "news-project-client",
  storageBucket: "news-project-client.appspot.com",
  messagingSenderId: "1033819110048",
  appId: "1:1033819110048:web:7d23d7b0bed9d9df3e67c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;