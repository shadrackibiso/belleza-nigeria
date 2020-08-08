import firebase from "firebase/app";
import "firebase/firestore";
<<<<<<< HEAD
import "firebase/storage";
=======
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4u0lOw_JgDA4eads7exReN97NjU-idwI",
  authDomain: "belleza-b1512.firebaseapp.com",
  databaseURL: "https://belleza-b1512.firebaseio.com",
  projectId: "belleza-b1512",
  storageBucket: "belleza-b1512.appspot.com",
  messagingSenderId: "807899287441",
  appId: "1:807899287441:web:436c58d41c8653da80d430",
  measurementId: "G-WQDS0BPSJ5",
};

const fb = firebase.initializeApp(firebaseConfig);
export default fb;
