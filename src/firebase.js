import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB_WpNnGZ_41dNG38O-FyDvj6_xI3qxXGQ",
  authDomain: "disney-plus-297a1.firebaseapp.com",
  projectId: "disney-plus-297a1",
  storageBucket: "disney-plus-297a1.appspot.com",
  messagingSenderId: "373460037369",
  appId: "1:373460037369:web:b73941a0f792f3233dfc28",
  measurementId: "G-VR1G8F91J0",
};




const app=initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;
