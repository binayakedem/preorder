
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy8lqh095Cc2gD-91oL3heIEcscJW6dbM",
  authDomain: "pre-ordering-system.firebaseapp.com",
  databaseURL: "https://pre-ordering-system-default-rtdb.firebaseio.com",
  projectId: "pre-ordering-system",
  storageBucket: "pre-ordering-system.appspot.com",
  messagingSenderId: "449657250781",
  appId: "1:449657250781:web:6ff86c934808fe6bcb4c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);