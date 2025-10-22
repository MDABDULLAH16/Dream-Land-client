// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSm5oMIAQd7iBnTKKCYkqwgq077uN1yOU",
  authDomain: "dreamland-439d7.firebaseapp.com",
  projectId: "dreamland-439d7",
  storageBucket: "dreamland-439d7.firebasestorage.app",
  messagingSenderId: "696726611299",
  appId: "1:696726611299:web:6c13d3fee6b9de7b319f56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);