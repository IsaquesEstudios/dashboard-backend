// Import the functions you need from the SDKs you need
import { database } from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   databaseURL: process.env.DATABASEURL,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId:process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDwLkyke5PngPtDPQcpKmJ6R2KtVnZUAro",
  authDomain: "dashboard-isaques-estudios.firebaseapp.com",
  projectId: "dashboard-isaques-estudios",
  storageBucket: "dashboard-isaques-estudios.appspot.com",
  messagingSenderId: "965160402879",
  appId: "1:965160402879:web:c91f3ba52199c37045eb0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
