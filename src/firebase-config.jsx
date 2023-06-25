// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getAuth, GoogleAuthProvider} from  "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnujkaRTr_srGw8Hofw1d9eA1S_3F4oTM",
  authDomain: "blog-app-2f33d.firebaseapp.com",
  projectId: "blog-app-2f33d",
  storageBucket: "blog-app-2f33d.appspot.com",
  messagingSenderId: "455073132142",
  appId: "1:455073132142:web:12431683fe78e76276407f",
  measurementId: "G-P98D4CPS1S"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);