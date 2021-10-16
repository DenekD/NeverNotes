import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtaBbT1xIkal1_wfVxDRDvK7llkXLK1cY",
  authDomain: "nevernotes-5e85a.firebaseapp.com",
  projectId: "nevernotes-5e85a",
  storageBucket: "nevernotes-5e85a.appspot.com",
  messagingSenderId: "307099732542",
  appId: "1:307099732542:web:c2e377fb2bb5f64880df6f",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
