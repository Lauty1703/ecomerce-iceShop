// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsA7tOn_kZ_ir0URPMYx1hCWZI6K3GL0w",
  authDomain: "ecommerce-fa4b6.firebaseapp.com",
  projectId: "ecommerce-fa4b6",
  storageBucket: "ecommerce-fa4b6.appspot.com",
  messagingSenderId: "432479818968",
  appId: "1:432479818968:web:0b704f31a5979195df33ad"
};

// Initialize Firebase

const app=initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;