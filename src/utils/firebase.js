import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBbbO0CYTd3tPNqFmEzQlLxz1DHcFcgBLc",
  authDomain: "propertytradefair-2dddc.firebaseapp.com",
  projectId: "propertytradefair-2dddc",
  storageBucket: "propertytradefair-2dddc.appspot.com",
  messagingSenderId: "77839531293",
  appId:"1:77839531293:web:31c85198f62da289cff5f4",
  measurementId: "G-W4KDBS40ZC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
