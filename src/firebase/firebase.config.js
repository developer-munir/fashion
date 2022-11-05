// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyArUVje77b745NZ44dNkLQy9l_wkRPol0M",
  authDomain: "fashion-4db2b.firebaseapp.com",
  projectId: "fashion-4db2b",
  storageBucket: "fashion-4db2b.appspot.com",
  messagingSenderId: "692668268927",
  appId: "1:692668268927:web:fe2a9f6c119d0827e65a4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
