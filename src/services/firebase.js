import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-yGeqp-0RU-YNciQiBkhG8UCLd96I8Og",
  authDomain: "chatty-f310c.firebaseapp.com",
  databaseURL: "https://chatty-f310c-default-rtdb.firebaseio.com",
  storageBucket: "chatty-f310c.appspot.com"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();