import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-yGeqp-0RU-YNciQiBkhG8UCLd96I8Og",
    authDomain: "chatty-f310c.firebaseapp.com",
    projectId: "chatty-f310c",
    storageBucket: "chatty-f310c.appspot.com",
    messagingSenderId: "892019899491",
    appId: "1:892019899491:web:f2a1b34d927b30f5260c56",
    measurementId: "G-VYKSTZ6P3C"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();