import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyBH_bXl1x_UIpAhgNas1FN5JaEIQwJQJ1g",
  authDomain: "mern-e-commerce-ba432.firebaseapp.com",
  projectId: "mern-e-commerce-ba432",
  storageBucket: "mern-e-commerce-ba432.appspot.com",
  messagingSenderId: "840208188203",
  appId: "1:840208188203:web:328d61fb96bbdedb0b3b6e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


