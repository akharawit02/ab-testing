import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCORHxkCObZTD_6Cso_7pYDSIgsxz3oetw",
  authDomain: "ab-testing-39bd1.firebaseapp.com",
  databaseURL: "https://ab-testing-39bd1.firebaseio.com",
  projectId: "ab-testing-39bd1",
  storageBucket: "ab-testing-39bd1.appspot.com",
  messagingSenderId: "683134696504",
  appId: "1:683134696504:web:8287023fcddf8c45123acd",
  measurementId: "G-YGMH7BKCK2",
};
// Initialize Firebase

if (!firebase.apps.length) {
  console.log("working...");
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const analytics = firebase.analytics();
export { firebase };
