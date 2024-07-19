// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5T-_OopcgJF7DK3ayBaGFQwX1kgqy6jI",
  authDomain: "fir-auth-c5e1c.firebaseapp.com",
  projectId: "fir-auth-c5e1c",
  storageBucket: "fir-auth-c5e1c.appspot.com",
  messagingSenderId: "448915342897",
  appId: "1:448915342897:web:2ebd9459bd52c06aa77710"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
