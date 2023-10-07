// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VATE_AUTHDOMAIN,
  projectId: import.meta.env.VATE_PROJECTID,
  storageBucket: import.meta.env.VATE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VATE_MESSAGINGSENDERID,
  appId: import.meta.env.VATE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;